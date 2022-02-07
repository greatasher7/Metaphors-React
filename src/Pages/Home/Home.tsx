import React from 'react';
import styled from 'styled-components';
import logoImg from '../../Assets/Images/logoimg.png';

const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.variable.colors.t_green};
`;

const Home = () => {
  return (
    <Title>
      This is home component <img src={logoImg} alt="img" />
    </Title>
  );
};

export default Home;
