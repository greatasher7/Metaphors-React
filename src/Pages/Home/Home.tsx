import React from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Icon_arrowRight from '../../Assets/Images/Icon_arrowRight.png';
import { isSigninAtom } from '../../Store/Atoms';
import { novels_all, novels_recommend } from '../../Store/Data/Novels';
import NovelCard from './NovelCard';
import Banner from './Banner';

const Home = () => {
  const navigate = useNavigate();
  const isSignin = useRecoilValue(isSigninAtom);

  return (
    <>
      <Banner />
      <Container>
        {isSignin ? (
          <List_Container>
            <h4 className="subtitle">노블사랑님이 좋아할 만한 추천 월드</h4>
            <div className="list">
              {novels_recommend.map((novel, idx) => (
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
        ) : (
          <Intro_Container>
            <div
              className="contentBox"
              onClick={() => {
                navigate('/account');
              }}
            >
              <div>
                <span className="title">나를 닮은 캐릭터로 시작해보세요</span>
                <span className="contents">내 성격 NFT 생성하기</span>
              </div>
              <img src={Icon_arrowRight} alt="arrow right icon" className="iconArrow" />
            </div>
          </Intro_Container>
        )}
        <List_Container>
          <h4 className="subtitle">월드 전체 보기</h4>
          <div className="list">
            {novels_all.map((novel, idx) => (
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
    </>
  );
};

export default Home;

const Container = styled.div`
  ${({ theme }) => theme.mixin.paddingSide_depth1}
  ${({ theme }) => theme.mixin.paddingTopBottom}
`;

const Intro_Container = styled.section`
  ${({ theme }) => theme.mixin.paddingSide_depth2}
  margin-top: 30px;
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
      width: 8px;
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
  margin-top: 40px;
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
