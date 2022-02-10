import React from 'react';
import styled from 'styled-components';
import banner_home from '../../Assets/Images/banner_home.png';
import icon_arrowRight from '../../Assets/Images/icon_arrowRight.png';
import { novels } from '../../Store/Data/Novels';
import NovelCard from './NovelCard';

const Home = () => {
  return (
    <Container>
      <Banner_Container>
        <img src={banner_home} alt="banner" className="banner" />
      </Banner_Container>
      <Intro_Container>
        <div className="contentBox">
          <div>
            <span className="title">나를 닮은 캐릭터로 시작해보세요</span>
            <span className="contents">내 성격 NFT 생성하기</span>
          </div>
          <img src={icon_arrowRight} alt="arrow right icon" className="iconArrow" />
        </div>
      </Intro_Container>
      <List_Container>
        <h4 className="subtitle">소설 전체 보기</h4>
        <div className="list">
          {novels.map((novel, idx) => (
            <NovelCard
              key={idx}
              title={novel.title}
              author={novel.author}
              genre={novel.genre}
              items={novel.items}
              image={novel.image}
            />
          ))}
        </div>
      </List_Container>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  ${({ theme }) => theme.mixin.paddingSide_depth1}
  padding-top: 33px;
`;

const Banner_Container = styled.section`
  .banner {
    width: 100%;
  }
`;

const Intro_Container = styled.section`
  ${({ theme }) => theme.mixin.paddingSide_depth2}
  .contentBox {
    height: 77px;
    padding-left: 30px;
    padding-right: 16px;
    border-radius: 11px;
    background: linear-gradient(
      90deg,
      #2844cf -10%,
      #4678d0 24%,
      #44e09c 85%,
      #41a485 126%,
      #41a384 127%,
      #3a0848 155%,
      #3a0848 155%,
      #9963cf 156%,
      #81088a 156%
    );
    display: flex;
    align-items: center;
    justify-content: space-between;
    .iconArrow {
      width: 12px;
    }
    .title {
      display: block;
      ${({ theme }) => theme.mixin.textStyle.R_15}
    }
    .contents {
      display: block;
      ${({ theme }) => theme.mixin.textStyle.R_11}
      margin-top: 11px;
    }
  }
`;

const List_Container = styled.section`
  margin-top: 33px;
  .subtitle {
    ${({ theme }) => theme.mixin.textStyle.R_13}
    padding-left: 11px;
    margin-bottom: 6px;
  }
  .list {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    display: grid;
    grid-row-gap: 15px;
    padding: 15px 11px;
  }
`;
