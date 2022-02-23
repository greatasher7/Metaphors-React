import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import styled from 'styled-components';
import { Btn_Primary_FontBlack } from '../../Components/Button';
import { IItem } from '../../Store/Type/Interfaces';
import Icon_search from '../../Assets/Images/Icon_search.png';
import Icon_cookieCharge from '../../Assets/Images/Icon_cookieCharge.png';
import ItemCard_Market from './ItemCard_Market';
import ModalBuying from './Modal/ModalBuying';
import ModalCompleteBuying from './Modal/ModalCompleteBuying';

const item_list: IItem[] = [
  {
    name: '따뜻함',
    image: 'ddd',
    durability: 7,
    onSale: true,
    price: 2000,
  },
  {
    name: '용기',
    image: 'ddd',
    durability: 5,
    onSale: false,
    price: 5000,
  },
  {
    name: '청산가리',
    image: 'ddd',
    durability: 3,
    onSale: false,
    price: 1000,
  },
  {
    name: '독버섯',
    image: 'ddd',
    durability: 3,
    onSale: false,
    price: 1235000,
  },
];

const Market = () => {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate('/market');
  };

  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked);

  return (
    <>
      <Container>
        <Btn_Primary_FontBlack label="거래소" />
        <p
          className="my_klay"
          onClick={() => {
            navigate('/chargeklay');
          }}
        >
          <span>150,032KLAY</span>
          <img src={Icon_cookieCharge} alt="charge icon" className="charge_icon" />
        </p>
        <div className="searchbox">
          <img src={Icon_search} alt="search" className="search_icon" />
          <input type="text" className="search" placeholder="소재 이름으로 검색하기" />
          <div className="checkbox_box">
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked((prev) => !prev);
              }}
            />
            <span>내가 판매 중인 물품 제외</span>
          </div>
        </div>
        <section className="item_list">
          {item_list.map((item, idx) => (
            <ItemCard_Market
              key={idx}
              name={item.name}
              image={item.image}
              durability={item.durability}
              onSale={item.onSale}
              price={item.price ? item.price : 0}
            />
          ))}
        </section>
      </Container>
      <Routes>
        <Route path="/buying" element={<ModalBuying closeModal={closeModal} />} />
        <Route path="/completebuying" element={<ModalCompleteBuying closeModal={closeModal} />} />
      </Routes>
    </>
  );
};

export default Market;

const Container = styled.div`
  ${({ theme }) => theme.mixin.paddingSide_depth1}
  ${({ theme }) => theme.mixin.paddingTopBottom}
  > button {
    height: 44px;
  }
  .my_klay {
    color: #a2a4b7;
    ${({ theme }) => theme.mixin.textStyle.R_12}
    margin-top: 15px;
    border-radius: 15px;
    border: 1px solid #fff;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    .charge_icon {
      width: 13px;
    }
    span {
      padding-top: 3px;
    }
  }
  .searchbox {
    margin-top: 30px;
    position: relative;
    .search {
      width: 100%;
      background-color: #24253a;
      ${({ theme }) => theme.mixin.textStyle.R_16}
      padding: 8px 22px;
      border-radius: 20px;
    }
    .search_icon {
      position: absolute;
      width: 16px;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
    .checkbox_box {
      position: absolute;
      bottom: -30px;
      right: 0;
      display: flex;
      align-items: center;
      ${({ theme }) => theme.mixin.textStyle.R_12}
      color: #c2c2c2;
      height: 20px;
      span {
        padding-top: 3px;
      }
      input {
        background-color: #373850;
        border: 0;
      }
    }
  }
  .item_list {
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
  }
`;
