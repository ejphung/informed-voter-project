import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  background: ${(bgColor) => bgColor};
  z-index: 10;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #fff;
  text-decoration: none;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 1.7rem;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1.1rem;
  border: 2px solid #fff;
  border-radius: 30px;

  &:hover {
    color: grey;
    background: #fff;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <NavContainer bgColor={navbar ? '#fff' : 'transparent'}>
      <Logo href="">MEET YOUR REPS</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      {/* <Menu isOpen={isOpen}>
        <MenuLink href="">SIGN UP</MenuLink>
      </Menu> */}
    </NavContainer>
  );
}

export default Navbar;
