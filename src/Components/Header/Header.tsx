import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import SideNav from './SideNav';
import ModalLogout from './ModalLogout';
import Icon_menu from '../../Assets/Images/Icon_menu.png';
import Icon_login from '../../Assets/Images/Icon_login.png';
import Logo from '../../Assets/Images/Logo.png';
import Icon_cookie from '../../Assets/Images/Icon_cookie.png';
import Icon_cookieCharge from '../../Assets/Images/Icon_cookieCharge.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isSigninAtom, userInfoAtom } from '../../Store/Atoms';
import { getUserAssetInfo } from '../../Api';
import { IUserAssetInfo } from '../../Store/Type/Interfaces';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation;
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  const [isLogoutModalRender, setIsLogoutModalRender] = useState(false);
  const isSignin = useRecoilValue(isSigninAtom);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [userAssetInfo, setUserAssteInfo] = useState<IUserAssetInfo>({
    email: '',
    nickname: '',
    cookie: 0,
    token: 0,
  });

  const toggleNav = () => {
    setIsSideNavVisible((prev) => !prev);
  };

  const onLoginClick = () => {
    navigate('/account');
  };

  const closeModal = () => {
    setIsLogoutModalRender(false);
  };

  const openModal = () => {
    setIsLogoutModalRender(true);
  };

  useEffect(() => {
    getUserAssetInfo(userInfo.accessToken).then((res) => {
      console.log('user', res);
      setUserAssteInfo(res.content);
    });
  }, []);

  return (
    <>
      <Container
        isFirstSignin={
          location().pathname.includes('/firstsignin') ||
          location().pathname.includes('/account/complete')
        }
      >
        <img src={Icon_menu} alt="menu icon" className="icon" onClick={toggleNav} />
        {isSignin ? (
          <ChargeIconBox
            onClick={() => {
              navigate('/charge');
            }}
          >
            <div className="flex_left">
              <img
                src={Icon_cookie}
                alt="cookie icon"
                className="cookie_icon"
                onClick={onLoginClick}
              />
              <span className="my_cookie">{userAssetInfo.cookie}</span>
            </div>
            <img
              src={Icon_cookieCharge}
              alt="charge icon"
              className="charge_icon"
              onClick={onLoginClick}
            />
          </ChargeIconBox>
        ) : (
          <img src={Icon_login} alt="login icon" className="icon" onClick={onLoginClick} />
        )}
        <img
          src={Logo}
          alt="home icon"
          className="home"
          onClick={() => {
            navigate('/');
          }}
        />
      </Container>
      {isSideNavVisible && (
        <SideNav toggleNav={toggleNav} clickLogout={openModal} nickname={userAssetInfo.nickname} />
      )}
      {isLogoutModalRender && <ModalLogout closeModal={closeModal} />}
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

const ChargeIconBox = styled.div`
  display: flex;
  width: 83px;
  height: 26px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border: 1.5px solid #fff;
  border-radius: 16px;
  .flex_left {
    display: flex;
    align-items: center;
    .cookie_icon {
      width: 14px;
    }
    .my_cookie {
      ${({ theme }) => theme.mixin.textStyle.M_13}
      padding-top: 2px;
      margin-left: 3px;
    }
  }
  .charge_icon {
    width: 15px;
  }
`;
