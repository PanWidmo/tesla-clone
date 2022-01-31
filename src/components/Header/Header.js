import React from 'react';
import styled from 'styled-components';
import logoImg from 'assets/images/logo.png';

const Wrapper = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightNavigation = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    margin-right: 10px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <a href="https://www.tesla.com">
        <img src={logoImg} alt="Logo" />
      </a>
      <Navigation>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Navigation>
      <RightNavigation>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
      </RightNavigation>
    </Wrapper>
  );
};

export default Header;
