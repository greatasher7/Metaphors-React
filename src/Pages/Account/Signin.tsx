import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import ModalWrong from './ModalWrong';

const InputEmail = () => {
  return (
    <div className="container_input">
      <InputStyle type="text" placeholder="이메일을 입력해주세요" />
    </div>
  );
};

const InputPassword = () => {
  return (
    <div className="container_input">
      <InputStyle type="password" placeholder="비밀번호를 입력해주세요" />
    </div>
  );
};

const Signin = () => {
  const [isWrongModalRender, setIsWrongModalRender] = useState(true);

  const navigate = useNavigate();

  const closeModal = () => {
    setIsWrongModalRender(false);
  };

  return (
    <>
      <Container>
        <h2>로그인</h2>
        <InputContainer>
          <InputEmail />
          <InputPassword />
        </InputContainer>
        <BtnContainer>
          <BtnStyle
            onClick={() => {
              navigate('/');
            }}
          >
            로그인
          </BtnStyle>
          <BtnStyle
            onClick={() => {
              navigate('/account/signup');
            }}
          >
            회원가입
          </BtnStyle>
        </BtnContainer>
      </Container>
      {isWrongModalRender && <ModalWrong closeModal={closeModal} />}
    </>
  );
};

export default Signin;

const Container = styled.div`
  ${({ theme }) => theme.mixin.paddingSide_login}
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    ${({ theme }) => theme.mixin.textStyle.M_18}
  }
`;

const InputContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-rows: 90px auto;
  align-items: start;
  .container_input {
    position: relative;
    .password_guide {
      ${({ theme }) => theme.mixin.textStyle.R_11}
      margin-top: 10px;
      padding-left: 5px;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    &:not(:first-child) {
      margin-top: 5px;
    }
  }
`;

const InputStyle = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  box-shadow: none;
  border-radius: none;
  padding: 7px 5px;
  ${({ theme }) => theme.mixin.textStyle.R_16}
`;

const BtnStyle = styled.button`
  background-color: ${({ theme }) => theme.variable.colors.highlight_color};
  border: none;
  border-radius: 9px;
  ${({ theme }) => theme.mixin.textStyle.R_15}
  width: 100%;
  height: 38px;
`;
