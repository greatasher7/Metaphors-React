import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { IItem } from '../../Store/Type/Interfaces';

const ItemCard_Market = ({ name, image, durability, price }: IItem) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="image"></div>
      <div className="content">
        <h4 className="title">{name}</h4>
        <span className="dutability">{durability}/10회 남음</span>
        <span className="price">{price}KLAY</span>
      </div>
      <div
        className="buy_btn"
        onClick={() => {
          navigate('/market/buying');
        }}
      >
        구입
      </div>
    </Container>
  );
};

export default ItemCard_Market;

const Container = styled.article`
  display: grid;
  grid-template-columns: 77px auto;
  grid-column-gap: 14px;
  height: 100px;
  padding: 12px 11px;
  ${({ theme }) => theme.mixin.textStyle.R_12}
  background-color: #24253a;
  border-radius: 6px;
  position: relative;
  .image {
    width: 77px;
    height: 77px;
    background-color: ${({ theme }) => theme.variable.colors.A_FFF};
    border-radius: 5px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${({ theme }) => theme.variable.colors.A_FFF};
    .title {
      ${({ theme }) => theme.mixin.flexCenter}
      padding: 0 9px;
      height: 20px;
      background-color: ${({ theme }) => theme.variable.colors.item_color};
      border-radius: 10px;
    }
    .dutability {
      margin-top: 8px;
      color: #a2a4b7;
    }
    .price {
      ${({ theme }) => theme.mixin.textStyle.R_12}
      margin-top: 20px;
    }
  }
  .buy_btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    ${({ theme }) => theme.mixin.flexCenter}
    background-color: #2c2e48;
    border-radius: 0 6px 6px 0;
  }
`;
