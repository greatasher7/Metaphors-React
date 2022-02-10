import React from 'react';
import styled from 'styled-components';
import icon_menu from '../Assets/Images/icon_menu.png';
import icon_login from '../Assets/Images/icon_login.png';

const Header = () => {
  return (
    <Container>
      <img src={icon_menu} alt="menu icon" className="icon" />
      <img src={icon_login} alt="login icon" className="icon" />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: ${({ theme }) => theme.variable.colors.background_color};
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
`;
