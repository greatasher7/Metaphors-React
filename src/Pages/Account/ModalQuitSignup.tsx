import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const ModalQuitSignup = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  const btnBackOnClick = () => {
    navigate(-1);
  };

  return (
    <ModalContainer>
      <ModalBox>
        <h4>회원가입을 중단하시겠습니까?</h4>
        <ModalBtnBox>
          <ModalBtn background="white" onClick={btnBackOnClick}>
            예, 중단하겠습니다
          </ModalBtn>
          <ModalBtn background="black" onClick={closeModal}>
            아니요, 계속 진행하겠습니다
          </ModalBtn>
        </ModalBtnBox>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalQuitSignup;

const ModalContainer = styled.div`
  ${({ theme }) => theme.mixin.modalContainer}
`;

const ModalBox = styled.div`
  ${({ theme }) => theme.mixin.modalBox}
  height: 193px;
  padding-top: 46px;
  h4 {
    ${({ theme }) => theme.mixin.textStyle.M_15}
  }
`;

const ModalBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

const ModalBtn = styled.button<{ background: string }>`
  ${({ theme }) => theme.mixin.flexCenter}
  ${({ theme }) => theme.mixin.textStyle.R_12}
  width: 190px;
  background-color: ${(props) => (props.background === 'white' ? '#fff' : '#000')};
  color: ${(props) => (props.background === 'white' ? '#000' : '#fff')};
  border-radius: 15px;
  padding: 7px 0;
  &:first-child {
    margin-bottom: 8px;
  }
`;
