import React, { useState } from 'react';
import styled from 'styled-components';
import Icon_x from '../../../Assets/Images/Icon_x.png';
import { useNavigate, useParams } from 'react-router';
import { IBtn } from '../../../Store/Type/Interfaces';
import { postCreateItem } from '../../../Api';
import { useRecoilState } from 'recoil';
import { userInfoAtom } from '../../../Store/Atoms';

const ModalNoItem = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [tryCount, setTryCount] = useState(0);

  const handleCreateClick = () => {
    setTryCount((prev) => prev + 1);
    postCreateItem(userInfo.accessToken, params.id).then((res) => {
      console.log('create??', res);
      if (res.result === 'ok') {
        console.log('create!!!!', res);
        navigate(`/work/viewer/${params.id}/draw`);
      } else {
      }
    });
  };

  const handleUseClick = () => {
    navigate(`/work/viewer/${params.id}/using`);
  };

  return (
    <ModalContainer>
      <ModalBox>
        <img src={Icon_x} alt="close button" className="close_btn" onClick={closeModal} />
        {tryCount === 0 ? (
          <h3>
            원하는 행동을 하기 위해서는
            <br />[{params.id}]가 필요해요
          </h3>
        ) : (
          <h3>
            획득에 <span>실패</span>했어요.
            <br />
            다음 기회를 노려보세요!
          </h3>
        )}
        <Btn_Container>
          <Btn_Modal_Primary label={`[${params.id}] 확률로 획득하기`} onClick={handleCreateClick} />
          <Btn_Modal_White label={`[${params.id}] 구입하기`} onClick={() => navigate(`/market`)} />
          <Btn_Modal_Black
            label={`쿠키 1개로 [${params.id}] 1회 이용하기`}
            onClick={handleUseClick}
          />
        </Btn_Container>
        <span
          className="cookie"
          onClick={() => {
            navigate('/charge');
          }}
        >
          쿠키 충전하기
        </span>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalNoItem;

const ModalContainer = styled.div`
  ${({ theme }) => theme.mixin.modalContainer}
`;

const ModalBox = styled.div`
  ${({ theme }) => theme.mixin.modalBox}
  height: 305px;
  padding: 0 24px;
  padding-top: 44px;
  position: relative;
  .close_btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 10px;
  }
  h3 {
    ${({ theme }) => theme.mixin.textStyle.M_15}
    text-align: center;
    line-height: 1.5;
    span {
      color: #ff5e5e;
    }
  }
  .cookie {
    margin-top: 10px;
    ${({ theme }) => theme.mixin.textStyle.M_12}
  }
`;

const Btn_Container = styled.div`
  display: grid;
  width: 100%;
  margin-top: 20px;
  grid-row-gap: 10px;
`;

const Btn_Modal_Primary = ({ onClick, label }: IBtn) => {
  return (
    <Primary onClick={onClick}>
      <span>{label}</span>
      <span className="black">-1KALY</span>
    </Primary>
  );
};

const Btn_Modal_White = ({ onClick, label }: IBtn) => {
  return (
    <White onClick={onClick}>
      <span>{label}</span>
      <p>다른 소설에서도 10번 무료로 쓸 수 있어요.</p>
    </White>
  );
};

const Btn_Modal_Black = ({ onClick, label }: IBtn) => {
  return <Black onClick={onClick}>{label}</Black>;
};

const Common = styled.button`
  ${({ theme }) => theme.mixin.flexCenter}
  ${({ theme }) => theme.mixin.textStyle.M_12}
  border-radius: 15px;
  width: 100%;
  height: 40px;
  .label {
  }
`;

const Primary = styled(Common)`
  background-color: ${({ theme }) => theme.variable.colors.highlight_color};
  color: ${({ theme }) => theme.variable.colors.A_FFF};
  .black {
    color: ${({ theme }) => theme.variable.colors.black_color};
    margin-left: 6px;
  }
`;
const White = styled(Common)`
  background-color: ${({ theme }) => theme.variable.colors.A_FFF};
  color: ${({ theme }) => theme.variable.colors.black_color};
  flex-direction: column;
  height: 56px;
  p {
    margin-top: 3px;
  }
`;
const Black = styled(Common)`
  background-color: ${({ theme }) => theme.variable.colors.black_color};
  color: ${({ theme }) => theme.variable.colors.A_FFF};
`;
