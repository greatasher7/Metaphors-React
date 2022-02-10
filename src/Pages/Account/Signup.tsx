import React, { useState } from 'react';
import styled from 'styled-components';
import ModalComplete from './ModalComplete';
import ModalQuitSignup from './ModalQuitSignup';

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
      <p className="password_guide">*8~16자의 영문, 숫자를 사용한 비밀번호를 입력해주세요.</p>
    </div>
  );
};

const InputPasswordAgain = () => {
  return (
    <div className="container_input">
      <InputStyle type="password" placeholder="비밀번호를 재입력해주세요" />
    </div>
  );
};

const Signup = () => {
  const [isEmail, setIsEmail] = useState(true);
  const [isQuitModalRender, setIsQuitModalRender] = useState(false);
  const [isCompleteModalRender, setIsCompleteModalRender] = useState(false);

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
    const btnOnClick = () => {
      if (isEmail) {
        setIsEmail(false);
      } else {
        setIsCompleteModalRender(true);
      }
    };
    return <BtnStyle onClick={btnOnClick}>{label}</BtnStyle>;
  };

  const closeModal = () => {
    setIsQuitModalRender(false);
  };

  return (
    <>
      <Container>
        <h2>회원가입</h2>
        <InputContainer>
          {isEmail ? (
            <InputEmail />
          ) : (
            <>
              <InputPassword />
              <InputPasswordAgain />
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
  .container_input {
    position: relative;
    .password_guide {
      ${({ theme }) => theme.mixin.textStyle.R_11}
      margin-top: 10px;
      padding-left: 5px;
    }
  }
`;

const BtnContainer = styled.div<{ isEmail: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  background-color: transparent;
  border: none;
  ${({ theme }) => theme.mixin.textStyle.R_13}
`;
