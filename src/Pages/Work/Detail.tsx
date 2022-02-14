import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Btn_Primary_FontBlack, Btn_Gray } from '../../Components/Button';

const Detail = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Info>
        <div className="image"></div>
        <div className="info">
          <h4 className="title">조선시대 대령숙수가 된 나</h4>
          <span className="author">안소</span>
          <div className="inlineBox">
            <span className="date">2021.12.25</span>
            <ul className="items">
              <li>차가움</li>
              <li>절권도</li>
            </ul>
          </div>
        </div>
        <div className="desc">
          상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명
          상세설명
        </div>
      </Info>
      <Btn_Container>
        <Btn_Primary_FontBlack
          label="지금 시작하기 [1화]"
          onClick={() => {
            navigate('/work/viewer');
          }}
        />
        <Btn_Gray
          label="다시 시작하기"
          onClick={() => {
            navigate('/work/viewer');
          }}
        />
      </Btn_Container>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  ${({ theme }) => theme.mixin.paddingSide_depth1}
  ${({ theme }) => theme.mixin.paddingTopBottom}
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 68px auto;
  grid-template-rows: auto auto;
  grid-column-gap: 17px;
  grid-row-gap: 20px;
  ${({ theme }) => theme.mixin.textStyle.R_11}

  .image {
    width: 100%;
    height: 92px;
    background-color: #ffffff;
    border-radius: 4px;
  }
  .info {
    display: flex;
    flex-direction: column;
    .title {
      ${({ theme }) => theme.mixin.textStyle.M_15}
      padding-top: 3px;
    }
    .author {
      display: block;
      margin-top: 10px;
      ${({ theme }) => theme.mixin.textStyle.R_13}
      color: ${({ theme }) => theme.variable.colors.gray_color};
    }
    .inlineBox {
      display: flex;
      align-items: center;
      margin-top: 30px;
      .date {
        display: flex;
        padding-top: 3px;
        align-items: center;
      }
      .items {
        margin-left: 12px;
        display: flex;
        li {
          height: 19px;
          ${({ theme }) => theme.mixin.flexCenter}
          background-color: #429f7a;
          border-radius: 9px;
          padding: 0 7px;
          padding-top: 3px;
          &:not(:first-child) {
            margin-left: 6px;
          }
        }
      }
    }
  }
  .desc {
    grid-column: 1/3;
    ${({ theme }) => theme.mixin.textStyle.R_10}
    line-height: 1.5;
  }
`;

const Btn_Container = styled.div`
  margin-top: 30px;
  display: grid;
  width: 100%;
  grid-row-gap: 10px;
  button {
    ${({ theme }) => theme.mixin.textStyle.M_13}
  }
`;
