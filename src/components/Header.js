import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: 2px solid white;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
`;

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // In a real app, you would update the theme context here
  };

  return (
    <HeaderContainer>
      <Nav>
        <LogoContainer to="/">
          <LogoImage src={Logo} alt="Wallet UI Logo" />
          <LogoText>Wallet UI</LogoText>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </ThemeToggle>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;