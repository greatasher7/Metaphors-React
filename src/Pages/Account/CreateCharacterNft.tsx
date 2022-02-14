import React, { useState } from 'react';
import styled from 'styled-components';
import { Btn_Gradient } from '../../Components/Button';
import { IBtn } from '../../Store/Type/Interfaces';
import Arrow_R from '../../Assets/Images/Icon_arrowR.png';
import Arrow_L from '../../Assets/Images/Icon_arrowL.png';
import { useNavigate } from 'react-router';

const tempdata = {
  charactor: [
    '차가움',
    '따뜻함',
    '즉흥적임',
    '계획적임',
    '활기참',
    '긍정적임',
    '부정적임',
    '소심함',
  ],
  genre: [
    '로맨스',
    '판타지',
    'SF',
    '스릴러',
    '액션/무협',
    'BL',
    '드라마',
    '학원물',
    '로맨스판타지',
    '추리',
  ],
};

const CreateCharacterNft = () => {
  const [nowStep, setNowStep] = useState('name');
  const navigate = useNavigate();

  const ContentBox = ({ label }: IBtn) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <TextBox
        onClick={() => {
          isSelected ? setIsSelected(false) : setIsSelected(true);
        }}
        isSelected={isSelected}
      >
        {label}
      </TextBox>
    );
  };

  const NameBox = () => {
    return (
      <>
        <h3 className="title">
          내 이름은 무엇인가요?
          <img
            src={Arrow_R}
            alt="다음"
            onClick={() => {
              setNowStep('character');
            }}
            className="right"
          />
        </h3>
        <input type="text" placeholder="ex) 역삼동불고기" />
      </>
    );
  };

  const CharacterBox = () => {
    return (
      <>
        <h3 className="title">
          <img
            src={Arrow_L}
            alt="이전"
            onClick={() => {
              setNowStep('name');
            }}
            className="left"
          />
          나는 어떤 성격을 갖고 있나요?
          <img
            src={Arrow_R}
            alt="다음"
            onClick={() => {
              setNowStep('genre');
            }}
            className="right"
          />
        </h3>
        <p className="desc">3개의 성격을 선택해주세요.</p>
        <ul className="contList">
          {tempdata.charactor.map((cont, idx) => (
            <ContentBox key={idx} label={cont} />
          ))}
        </ul>
      </>
    );
  };

  const GenreBox = () => {
    return (
      <>
        <h3 className="title">
          <img
            src={Arrow_L}
            alt="이전"
            onClick={() => {
              setNowStep('character');
            }}
            className="left"
          />
          나는 어떤 장르를 좋아하나요?
          <img
            src={Arrow_R}
            alt="다음"
            onClick={() => {
              navigate('/account/complete');
            }}
            className="right"
          />
        </h3>
        <p className="desc">3개의 장르를 선택해주세요.</p>
        <ul className="contList">
          {tempdata.genre.map((cont, idx) => (
            <ContentBox key={idx} label={cont} />
          ))}
        </ul>
      </>
    );
  };

  return (
    <Container>
      <Btn_Gradient label="NET 생성 중" />
      {nowStep === 'name' ? <NameBox /> : nowStep === 'character' ? <CharacterBox /> : <GenreBox />}
    </Container>
  );
};

export default CreateCharacterNft;

const Container = styled.div`
  padding: 0 33px;
  ${({ theme }) => theme.mixin.paddingTopBottom}
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    ${({ theme }) => theme.mixin.textStyle.R_16}
    margin-top: 40px;
    position: relative;
    img {
      position: absolute;
      width: 18px;
      &.left {
        left: -45px;
      }
      &.right {
        right: -45px;
      }
    }
  }
  .desc {
    text-align: center;
    ${({ theme }) => theme.mixin.textStyle.R_12}
    color: #595c7a;
    margin-top: 8px;
  }
  input {
    width: 80%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 5px 5px;
    margin-top: 80px;
    ${({ theme }) => theme.mixin.textStyle.R_16}
  }
  .contList {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 60px;
  }
`;

const TextBox = styled.li<{ isSelected: boolean }>`
  ${({ theme }) => theme.mixin.flexCenter}
  ${({ theme }) => theme.mixin.textStyle.R_13}
  padding: 0 15px;
  background-color: ${(props) =>
    props.isSelected
      ? ({ theme }) => theme.variable.colors.highlight_color
      : ({ theme }) => theme.variable.colors.inactive_color};
  height: 30px;
  border-radius: 14px;
`;
