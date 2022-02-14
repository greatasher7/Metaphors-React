import React, { useState } from 'react';
import styled from 'styled-components';
import { ISelectOption } from '../../Store/Type/Interfaces';

const select_option: ISelectOption[] = [
  {
    name: '절권도 8/10',
    act: '도망간다.',
  },
  {
    name: '청산가리',
    act: '어떻게 알았지',
  },
  {
    act: '도망간다.',
  },
];

const SelectOption = () => {
  return (
    <SelectContainer>
      {select_option.map((option, idx) => (
        <li key={idx}>
          {option.name} / {option.act}
        </li>
      ))}
    </SelectContainer>
  );
};

const SelectContainer = styled.ul`
  width: 100vw;
  height: 400px;
  position: fixed;
  z-index: 10000;
  bottom: 0;
  left: 0;
  background-color: rgba(21, 25, 39, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 30px 30px 0 0;
`;

const Footer = () => {
  return <FooterContainer></FooterContainer>;
};

const FooterContainer = styled.footer`
  width: 100vw;
  height: 45px;
  position: fixed;
  z-index: 10000;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.variable.colors.background_color};
`;

const Viewer = () => {
  const [isVisibleOption, setIsVisibleOption] = useState(true);

  return (
    <>
      <Container>
        <h2 className="title">조선시대 대령숙수가 된 나</h2>
        <span className="author">안소</span>
      </Container>
      {isVisibleOption && <SelectOption />}
      <Footer />
    </>
  );
};

export default Viewer;

const Container = styled.div`
  padding: 0 33px;
  ${({ theme }) => theme.mixin.paddingTopBottom}
  background-color: ${({ theme }) => theme.variable.colors.A_FFF};
  height: 200vh;
  color: ${({ theme }) => theme.variable.colors.black_color};
  .title {
  }
`;
