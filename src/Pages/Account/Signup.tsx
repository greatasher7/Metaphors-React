import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import ModalComplete from './Modal/ModalComplete';
import ModalQuitSignup from './Modal/ModalQuitSignup';
import { InputEmail, InputPassword, InputPasswordAgain } from './Inputs';

const Signup = () => {
  const [isEmail, setIsEmail] = useState(true);
  const [isQuitModalRender, setIsQuitModalRender] = useState(false);
  const [isCompleteModalRender, setIsCompleteModalRender] = useState(false);
  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [againPassword, setAgainPassword] = useState('');

  const navigate = useNavigate();

  const BtnGoBack = ({ label }: { label: string }) => {
    const btnOnClick = () => {
      if (isEmail) {
        setIsQuitModalRender(true);
      } else {
        setIsEmail(true);
      }
    };

    return <BtnStyle onClick={btnOnClick}>{label}</BtnStyle>;
  };

  const BtnGoForward = ({ label }: { label: string }) => {
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    const btnOnClick = () => {
      if (isEmail) {
        if (regEmail.test(email)) {
          setIsEmail(false);
        } else {
          setIsWrongEmail(true);
        }
      } else {
        setIsCompleteModalRender(true);
      }
    };
    return <BtnStyle onClick={btnOnClick}>{label}</BtnStyle>;
  };

  const closeModal = () => {
    setIsQuitModalRender(false);
  };

  console.log(email, password, againPassword);

  return (
    <>
      <Container>
        <h2>회원가입</h2>
        <InputContainer>
          {isEmail ? (
            <>
              <InputEmail
                setState={(value) => {
                  setEmail(value);
                }}
              />
              <p className="login">
                이미 계정이 있으신가요?{' '}
                <span
                  className="login_btn"
                  onClick={() => {
                    navigate('/account');
                  }}
                >
                  로그인
                </span>{' '}
                하기
              </p>
            </>
          ) : (
            <>
              <InputPassword
                setState={(value) => {
                  setPassword(value);
                }}
              />
              <InputPasswordAgain
                setState={(value) => {
                  setAgainPassword(value);
                }}
              />
            </>
          )}
        </InputContainer>
        <BtnContainer isEmail={isEmail}>
          <BtnGoBack label="이전" />
          {isEmail ? <BtnGoForward label="다음" /> : <BtnGoForward label="완료하기" />}
        </BtnContainer>
      </Container>
      {isQuitModalRender && <ModalQuitSignup closeModal={closeModal} />}
      {isCompleteModalRender && <ModalComplete />}
    </>
  );
};

export default Signup;

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
  grid-template-rows: 100px auto;
  align-items: start;
  position: relative;
  .container_input {
    position: relative;
    .password_guide {
      ${({ theme }) => theme.mixin.textStyle.R_11}
      margin-top: 10px;
      padding-left: 5px;
    }
  }
  .login {
    ${({ theme }) => theme.mixin.textStyle.R_13}
    position: absolute;
    width: 100%;
    text-align: center;
    top: 70px;
    color: ${({ theme }) => theme.variable.colors.btn_inactive_color};
    .login_btn {
      color: ${({ theme }) => theme.variable.colors.highlight_color};
      text-decoration: underline;
    }
  }
`;

const BtnContainer = styled.div<{ isEmail: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BtnStyle = styled.button`
  background-color: transparent;
  border: none;
  ${({ theme }) => theme.mixin.textStyle.R_13}
`;
