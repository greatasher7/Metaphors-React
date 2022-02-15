import React from 'react';
import styled from 'styled-components';
import Icon_x from '../../../Assets/Images/Icon_x.png';
import { useNavigate } from 'react-router';
import { IBtn } from '../../../Store/Type/Interfaces';

const ModalNoItem = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  return (
    <ModalContainer>
      <ModalBox>
        <img src={Icon_x} alt="close button" className="close_btn" onClick={closeModal} />
        <h3>
          원하는 행동을 하기 위해서는
          <br />
          [청산가리]가 필요해요
        </h3>
        <Btn_Container>
          <Btn_Modal_Primary label="[청산가리] 확률로 획득하기" />
          <Btn_Modal_White
            label="[청산가리] 구입하기"
            onClick={() => navigate('/work/viewer/draw')}
          />
          <Btn_Modal_Black label="쿠키 1개로 [청산가리] 1회 이용하기" />
        </Btn_Container>
        <span className="cookie">쿠키 충전하기</span>
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
