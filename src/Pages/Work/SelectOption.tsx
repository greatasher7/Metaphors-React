import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { ISelectOption } from '../../Store/Type/Interfaces';

const select_option: ISelectOption[] = [
  {
    item: '절권도 8/10',
    act: '도망간다.',
  },
  {
    item: '청산가리',
    act: '어떻게 알았지',
  },
  {
    act: '도망간다.',
  },
];

const SelectOption = () => {
  const navigate = useNavigate();

  return (
    <SelectContainer>
      {select_option.map((option, idx) => (
        <li key={idx} onClick={() => navigate('/work/viewer/noitem')}>
          {option.item && <span className="item">{option.item}</span>}
          <span className="act">{option.act}</span>
        </li>
      ))}
    </SelectContainer>
  );
};

export default SelectOption;

const SelectContainer = styled.ul`
  width: 100vw;
  height: 300px;
  position: fixed;
  z-index: 10000;
  bottom: 0;
  left: 0;
  background-color: rgba(21, 25, 39, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 30px 30px 0 0;
  padding: 22px 44px;
  li {
    height: 54px;
    display: flex;
    align-items: center;
    column-gap: 20px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.variable.colors.btngray_color};
    .item {
      ${({ theme }) => theme.mixin.textStyle.R_17}
      ${({ theme }) => theme.mixin.flexCenter}
      padding: 4px 16px;
      padding-top: 6px;
      background-color: ${({ theme }) => theme.variable.colors.highlight_color};
      border-radius: 15px;
    }
    .act {
      ${({ theme }) => theme.mixin.textStyle.R_15}
    }
  }
`;
