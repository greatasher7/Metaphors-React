import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { postNovelDetail, postRestartNovel } from '../../Api';
import { Btn_Primary_FontBlack, Btn_Gray } from '../../Components/Button';
import { userInfoAtom } from '../../Store/Atoms';
import { INovelDetail } from '../../Store/Type/Interfaces';

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [nobelDetail, setNobelDetail] = useState<INovelDetail>();
  // const [isSign, setIsSign] =

  useEffect(() => {
    params.id && console.log('params', userInfo.accessToken, parseInt(params.id));
    try {
      params.id &&
        userInfo.accessToken &&
        postNovelDetail(userInfo.accessToken, parseInt(params.id)).then((res) => {
          console.log('aa', res);
          setNobelDetail(res.content);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const restartNovel = () => {
    params.id &&
      userInfo.accessToken &&
      postRestartNovel(userInfo.accessToken, parseInt(params.id)).then((res) => {
        console.log('restart', res);
      });
  };

  return (
    <Container>
      <Info>
        <div className="image"></div>
        <div className="info">
          <h4 className="title">{nobelDetail?.name}</h4>
          <span className="author">{nobelDetail?.author}</span>
          <div className="inlineBox">
            <span className="date">{nobelDetail?.issueDate.slice(0, 10)}</span>
            <ul className="items">
              {nobelDetail?.nftItems.split('/').map((item, idx) => {
                if (idx < 2) {
                  return <li key={idx}>{item}</li>;
                }
              })}
            </ul>
          </div>
        </div>
        <div className="desc">{nobelDetail?.description}</div>
      </Info>
      <Btn_Container>
        <Btn_Primary_FontBlack
          label={`이어보기 [${nobelDetail?.current}화]`}
          onClick={() => {
            navigate(`/work/viewer/${nobelDetail?.novelId}`);
          }}
        />
        <Btn_Gray
          label="다시 시작하기"
          onClick={() => {
            restartNovel();
            navigate(`/work/viewer/${nobelDetail?.novelId}`);
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
