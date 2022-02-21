import React, { useState } from 'react';
import styled from 'styled-components';
import { IInput } from '../../Store/Type/Interfaces';

export const InputEmail = ({ setState }: IInput) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setState(value);
  };

  return (
    <div className="container_input">
      <InputStyle
        type="text"
        placeholder="이메일을 입력해주세요"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export const InputPassword = ({ setState }: IInput) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setState(value);
  };

  return (
    <div className="container_input">
      <InputStyle
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={value}
        onChange={handleChange}
      />
      <p className="password_guide">*8~16자의 영문, 숫자를 사용한 비밀번호를 입력해주세요.</p>
    </div>
  );
};

export const InputPasswordAgain = ({ setState }: IInput) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setState(value);
  };

  return (
    <div className="container_input">
      <InputStyle
        type="password"
        placeholder="비밀번호를 재입력해주세요"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

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
