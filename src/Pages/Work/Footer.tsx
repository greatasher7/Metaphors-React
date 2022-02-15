import React from 'react';
import styled from 'styled-components';
import { IFooterProps } from '../../Store/Type/Interfaces';
import Icon_goPrev from '../../Assets/Images/Icon_goPrev.png';
import Icon_goNext from '../../Assets/Images/Icon_goNext.png';

const Footer = ({ moveNext, movePrev }: IFooterProps) => {
  return (
    <FooterContainer>
      <img src={Icon_goPrev} onClick={movePrev} alt="go previous" />
      <img src={Icon_goNext} onClick={moveNext} alt="go next" />
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
  img {
    width: 9px;
  }
`;

export default Footer;
