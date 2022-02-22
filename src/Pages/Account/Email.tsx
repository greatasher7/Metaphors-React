import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import ModalQuitSignup from './Modal/ModalQuitSignup';
import { InputEmail } from './Inputs';
import { BtnGoBack, BtnGoForward } from './Buttons';
import { getEmailOverlap } from '../../Api';
import { useRecoilState } from 'recoil';
import { signupAtom } from '../../Store/Atoms';

const Email = () => {
  const [isQuitModalRender, setIsQuitModalRender] = useState(false);
  const [isOverlap, setIsOverlap] = useState(false);
  const [email, setEmail] = useState('');
  const [signup, setSignup] = useRecoilState(signupAtom);

  const navigate = useNavigate();

  const closeModal = () => {
    setIsQuitModalRender(false);
  };

  const onGoBackClick = () => {
    setIsQuitModalRender(true);
  };

  const onGoForwardClick = () => {
    try {
      getEmailOverlap('a@gmail.com').then((res) => {
        // 중복 검사 결과 중복이면 isOverlap -> true, 아니면 recoil email 업데이트 하고 비밀번호 임력으로 이동
        console.log('result', res);
        // if (res.data === true) {
        //   setIsOverlap(true);
        // } else {
        //   setSignup({ ...signup, email: email });
        //   navigate('/account/signup/password');
        // }
      });
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <>
      <InputContainer>
        <InputEmail
          setState={(value) => {
            setEmail(value);
          }}
          isExternalWrong={isOverlap}
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
      </InputContainer>
      <BtnContainer>
        <BtnGoBack label="이전" onClick={onGoBackClick} />
        <BtnGoForward label="다음" onClick={onGoForwardClick} />
      </BtnContainer>
      {isQuitModalRender && <ModalQuitSignup closeModal={closeModal} />}
    </>
  );
};

export default Email;

const InputContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-rows: 100px auto;
  align-items: start;
  position: relative;

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

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
