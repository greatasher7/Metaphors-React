import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import styled from 'styled-components';
import { Btn_Primary_FontBlack } from '../../Components/Button';
import { ICookieOptionProps } from '../../Store/Type/Interfaces';
import Icon_cookie from '../../Assets/Images/Icon_cookie.png';
import ModalCompleteCharge from './Modal/ModalCompleteCharge';

const Charge = () => {
  const [cookieFocus, setCookieFocus] = useState(0);
  const navigate = useNavigate();
  const closeModal = () => {
    navigate('/charge');
  };

  const setFocus = (value: number) => {
    setCookieFocus(value);
  };

  return (
    <>
      <Container>
        <Btn_Primary_FontBlack label="쿠키 충전하기" />
        <p className="my_klay">150,032KLAY</p>
        <p className="cookie">
          사용 가능한 쿠키 <span className="my_cookie">0</span>
        </p>
        <Cookie_Container>
          <CookieOption setFocus={setFocus} isActive={cookieFocus === 10} count={10} price={1000} />
          <CookieOption setFocus={setFocus} isActive={cookieFocus === 50} count={50} price={4900} />
          <CookieOption
            setFocus={setFocus}
            isActive={cookieFocus === 100}
            count={100}
            price={9800}
          />
        </Cookie_Container>
      </Container>
      <Routes>
        <Route path="/complete" element={<ModalCompleteCharge closeModal={closeModal} />} />
      </Routes>
    </>
  );
};

export default Charge;

const Container = styled.div`
  ${({ theme }) => theme.mixin.paddingSide_depth1}
  ${({ theme }) => theme.mixin.paddingTopBottom}
  >button {
    height: 44px;
  }
  .my_klay {
    color: #a2a4b7;
    ${({ theme }) => theme.mixin.textStyle.R_12}
    margin-top: 15px;
  }
  .cookie {
    ${({ theme }) => theme.mixin.textStyle.R_12}
    margin-top: 5px;
    .my_cookie {
      color: ${({ theme }) => theme.variable.colors.highlight_color};
    }
  }
  .list_title {
    ${({ theme }) => theme.mixin.textStyle.M_16}
    margin-top: 45px;
  }
`;

const Cookie_Container = styled.ul`
  margin-top: 40px;
`;

const CookieOption = ({ isActive, count, price, setFocus }: ICookieOptionProps) => {
  const navigate = useNavigate();

  return (
    <CookieOption_Style
      isActive={isActive}
      onClick={() => {
        setFocus(count);
      }}
    >
      <div className="left">
        <img src={Icon_cookie} alt="cookie icon" />
        <span>쿠키 {count}개</span>
      </div>
      {!isActive && <span className="price">{price}원</span>}
      {isActive && (
        <div
          className="pay_box"
          onClick={() => {
            navigate('/charge/complete');
          }}
        >
          <h5>현금으로 결제하기</h5>
          <span>{price}원</span>
        </div>
      )}
    </CookieOption_Style>
  );
};

const CookieOption_Style = styled.li<{ isActive: boolean }>`
  ${({ theme }) => theme.mixin.textStyle.M_14}
  display: flex;
  flex-direction: ${(props) => (props.isActive ? 'column' : '')};
  align-items: ${(props) => (props.isActive ? '' : 'center')};
  padding-top: ${(props) => (props.isActive ? '15px' : '')};
  justify-content: ${(props) => (props.isActive ? '' : 'space-between')};
  height: ${(props) => (props.isActive ? '120px' : '47px')};
  border-bottom: ${(props) => (props.isActive ? '' : '1px solid #fff')};
  opacity: ${(props) => (props.isActive ? '1' : '0.4')};
  .left {
    display: flex;
    align-items: center;
    img {
      width: 15px;
      margin-right: 5px;
    }
  }
  .price {
    padding-right: 10px;
  }
  .pay_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    padding: 0 25px;
    background-color: #2c2e48;
    border-radius: 6px;
    margin-top: 15px;
  }
`;
