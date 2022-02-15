import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import icon_menu from '../Assets/Images/icon_menu.png';
import icon_login from '../Assets/Images/icon_login.png';
import Icon_x from '../Assets/Images/Icon_x.png';
import Logo from '../Assets/Images/Logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation;
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  const toggleNav = () => {
    setIsSideNavVisible((prev) => !prev);
  };

  const onLoginClick = () => {
    navigate('/account');
  };

  return (
    <>
      <Container
        isFirstSignin={
          location().pathname.includes('/firstsignin') ||
          location().pathname.includes('/account/complete')
        }
      >
        <img src={icon_menu} alt="menu icon" className="icon" onClick={toggleNav} />
        <img src={icon_login} alt="login icon" className="icon" onClick={onLoginClick} />
        <img
          src={Logo}
          alt="home icon"
          className="home"
          onClick={() => {
            navigate('/');
          }}
        />
      </Container>
      {isSideNavVisible && <SideNav toggleNav={toggleNav} />}
    </>
  );
};

export default Header;

const Container = styled.header<{ isFirstSignin: boolean }>`
  width: 100%;
  height: 55px;
  background-color: ${(props) =>
    props.isFirstSignin ? 'transparent' : ({ theme }) => theme.variable.colors.background_color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.mixin.paddingSide_depth1}
  position: sticky;
  top: 0;
  z-index: 10;
  .icon {
    width: 22px;
  }
  .home {
    position: absolute;
    width: 90px;
    left: 60px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

// side nav ////////////////////
const SideNav = ({ toggleNav }: { toggleNav: () => void }) => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <div className="contentarea">
        <img src={Icon_x} alt="close icon" className="close" onClick={toggleNav} />
        <ul className="menu_list">
          <li
            onClick={() => {
              navigate('/inventory');
              toggleNav();
            }}
          >
            인벤토리
          </li>
          <li
            onClick={() => {
              navigate('/market');
              toggleNav();
            }}
          >
            거래소
          </li>
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100000;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  color: ${({ theme }) => theme.variable.colors.black_color};
  .contentarea {
    position: relative;
    height: 100vh;
    width: 280px;
    background-color: ${({ theme }) => theme.variable.colors.A_FFF};
    padding: 185px 33px;
    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 15px;
    }
    .menu_list {
      li {
        ${({ theme }) => theme.mixin.textStyle.R_16}
        margin-bottom: 10px;
      }
    }
  }
`;
