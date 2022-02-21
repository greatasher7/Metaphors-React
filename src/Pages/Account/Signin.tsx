import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Btn_Primary } from '../../Components/Button';
import { isSigninAtom } from '../../Store/Atoms';
import ModalWrong from './Modal/ModalWrong';
import { InputEmail, InputPassword } from './Inputs';

const Signin = () => {
  const [isWrongModalRender, setIsWrongModalRender] = useState(false);
  const setIsSignin = useSetRecoilState(isSigninAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const closeModal = () => {
    setIsWrongModalRender(false);
  };

  const doSignin = () => {
    navigate('/account/firstsignin');
    setIsSignin(true);
  };

  return (
    <>
      <Container>
        <h2>로그인</h2>
        <InputContainer>
          <InputEmail
            setState={(value) => {
              setEmail(value);
            }}
          />
          <InputPassword
            setState={(value) => {
              setPassword(value);
            }}
          />
        </InputContainer>
        <Btn_Primary label="로그인" onClick={doSignin} />
        <p className="signin">
          Metaphors의 계정이 없다면, 지금{' '}
          <span
            onClick={() => {
              navigate('/account/signup');
            }}
          >
            회원가입
          </span>{' '}
          하기
        </p>
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
  .signin {
    margin-top: 15px;
    ${({ theme }) => theme.mixin.textStyle.R_13}
    span {
      color: ${({ theme }) => theme.variable.colors.highlight_color};
      text-decoration: underline;
    }
  }
`;

const InputContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-rows: 60px auto;
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
