import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const ModalWrong = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <ModalContainer>
      <ModalBox>
        <h4>회원정보를 찾을 수 없습니다.</h4>
        <p className="desc">
          등록되지 않은 정보이거나
          <br />
          계정 정보가 잘못 입력되었습니다.
        </p>
        <ModalBtn onClick={closeModal}>확인</ModalBtn>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalWrong;

const ModalContainer = styled.div`
  ${({ theme }) => theme.mixin.modalContainer}
`;

const ModalBox = styled.div`
  ${({ theme }) => theme.mixin.modalBox}
  height: 193px;
  padding: 0 24px;
  padding-top: 35px;
  h4 {
    ${({ theme }) => theme.mixin.textStyle.B_17}
    color: ${({ theme }) => theme.variable.colors.highlight_color};
  }
  .desc {
    ${({ theme }) => theme.mixin.textStyle.M_13}
    margin-top: 10px;
    text-align: center;
    line-height: 1.3;
  }
`;

const ModalBtn = styled.button`
  ${({ theme }) => theme.mixin.flexCenter}
  ${({ theme }) => theme.mixin.textStyle.R_15}
  width: 100%;
  height: 38px;
  margin-top: 25px;
  background-color: ${({ theme }) => theme.variable.colors.A_000};
  border-radius: 15px;
  padding: 7px 0;
  &:first-child {
    margin-bottom: 8px;
  }
`;
