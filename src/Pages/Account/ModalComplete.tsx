import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const ModalComplete = () => {
  const navigate = useNavigate();

  return (
    <ModalContainer>
      <ModalBox>
        <h4>
          다음의 메일 주소로
          <br />
          계정이 생성되었습니다.
        </h4>
        <span className="email">abcd123@gmail.com</span>
        <ModalBtn
          background="black"
          onClick={() => {
            navigate('/account');
          }}
        >
          로그인하기
        </ModalBtn>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalComplete;

const ModalContainer = styled.div`
  ${({ theme }) => theme.mixin.modalContainer}
`;

const ModalBox = styled.div`
  ${({ theme }) => theme.mixin.modalBox}
  height: 193px;
  padding: 0 24px;
  padding-top: 35px;
  h4 {
    ${({ theme }) => theme.mixin.textStyle.M_15}
    text-align: center;
    line-height: 1.5;
  }
  .email {
    ${({ theme }) => theme.mixin.textStyle.M_13}
    margin-top: 13px;
  }
`;

const ModalBtn = styled.button<{ background: string }>`
  ${({ theme }) => theme.mixin.flexCenter}
  ${({ theme }) => theme.mixin.textStyle.R_12}
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
