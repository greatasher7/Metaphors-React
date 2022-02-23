import React from 'react';
import styled from 'styled-components';
import { IFooterProps } from '../../Store/Type/Interfaces';
import Icon_goPrev from '../../Assets/Images/Icon_goPrev.png';
import Icon_goNext from '../../Assets/Images/Icon_goNext.png';
import Border_nextEpisode from '../../Assets/Images/Border_nextEpisode.png';

const Footer = ({ moveNext, movePrev, isLastPage, isFirstPage, haschoice }: IFooterProps) => {
  return (
    <FooterContainer>
      {isLastPage && (
        <NextEpisode>
          <span>다음화 보기</span>
          <img src={Border_nextEpisode} alt="next episode" />
        </NextEpisode>
      )}
      {isFirstPage || isLastPage ? (
        <span></span>
      ) : (
        <img className="arrow_icon" src={Icon_goPrev} onClick={movePrev} alt="go previous" />
      )}
      {isLastPage || haschoice ? (
        ''
      ) : (
        <img className="arrow_icon" src={Icon_goNext} onClick={moveNext} alt="go next" />
      )}
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100vw;
  height: 45px;
  position: fixed;
  z-index: 10000;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.variable.colors.background_color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  .arrow_icon {
    width: 9px;
  }
`;

const NextEpisode = styled.div`
  position: absolute;
  z-index: 100000;
  top: -66px;
  width: 80%;
  span {
    ${({ theme }) => theme.mixin.textStyle.M_16}
    color: ${({ theme }) => theme.variable.colors.black_color};
    padding-left: 11px;
  }
  img {
    width: 100%;
    position: absolute;
    top: 10px;
    left: 0;
  }
`;

export default Footer;
