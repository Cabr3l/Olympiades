import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Menu, 
  X, 
  Trophy, 
  BookOpen, 
  Calendar, 
  Users, 
  Image, 
  BarChart3,
  User,
  LogIn
} from 'lucide-react';
import { theme, mediaQueries } from '../../styles/theme';

const HeaderContainer = styled.header`
  background: ${theme.colors.neutral.white};
  box-shadow: ${theme.shadows.md};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.fixed};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${theme.colors.neutral.gray200};
`;

const NavContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary.green};
  text-decoration: none;
  transition: color ${theme.transitions.fast};
  margin-right: 80px;

  &:hover {
    color: ${theme.colors.primary.darkGreen};
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxl};
  flex: 1;
  justify-content: center;

  ${mediaQueries.mobile} {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: ${theme.colors.neutral.white};
    flex-direction: column;
    padding: ${theme.spacing.lg};
    box-shadow: ${theme.shadows.lg};
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform ${theme.transitions.normal};
    z-index: ${theme.zIndex.dropdown};
    border-bottom: 1px solid ${theme.colors.neutral.gray200};
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  color: ${props => props.isActive ? theme.colors.primary.green : theme.colors.neutral.gray700};
  text-decoration: none;
  border-radius: ${theme.borderRadius.md};
  font-weight: 500;
  transition: all ${theme.transitions.fast};
  position: relative;

  ${props => props.isActive ? `
    background-color: ${theme.colors.neutral.gray100};
    color: ${theme.colors.primary.green};
    font-weight: 600;
    
    &:hover {
      background-color: ${theme.colors.primary.green};
      color: ${theme.colors.neutral.white};
    }
  ` : `
    &:hover {
      background-color: ${theme.colors.primary.green};
      color: ${theme.colors.neutral.white};
    }
  `}

  svg {
    width: 18px;
    height: 18px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.neutral.gray700};
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.neutral.gray100};
    color: ${theme.colors.primary.green};
  }

  ${mediaQueries.mobile} {
    display: block;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  margin-left: auto;

  ${mediaQueries.mobile} {
    flex-direction: column;
    width: 100%;
    margin-top: ${theme.spacing.lg};
  }
`;

const AuthButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  font-weight: 500;
  transition: all ${theme.transitions.fast};
  font-size: 0.9rem;

  &.btn-primary {
    background: ${theme.colors.primary.green};
    color: ${theme.colors.neutral.white};

    &:hover {
      background: ${theme.colors.primary.darkBlue};
      transform: translateY(-1px);
      box-shadow: ${theme.shadows.lg};
    }
  }

  &.btn-outline {
    background: transparent;
    color: ${theme.colors.primary.green};
    border: 2px solid ${theme.colors.primary.green};

    &:hover {
      background: ${theme.colors.primary.green};
      color: ${theme.colors.neutral.white};
    }
  }

  &.btn-participant {
    background: ${theme.colors.neutral.gray100};
    color: ${theme.colors.primary.green};
    border: 2px solid ${theme.colors.primary.green};

    &:hover {
      background: ${theme.colors.primary.green};
      color: ${theme.colors.neutral.white};
    }
  }

  ${mediaQueries.mobile} {
    width: 100%;
    justify-content: center;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const navigationItems = [
  { label: 'À propos', path: '/about', icon: BookOpen },
  { label: 'Épreuves', path: '/tests', icon: Trophy },
  { label: 'Programme', path: '/program', icon: Calendar },
  { label: 'Résultats', path: '/results', icon: BarChart3 },
  { label: 'Galerie', path: '/gallery', icon: Image }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/" onClick={closeMenu}>
          <Trophy />
          Olympiades
        </Logo>
        
        <Nav isOpen={isMenuOpen}>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                isActive={location.pathname === item.path}
                onClick={closeMenu}
              >
                <Icon />
                {item.label}
              </NavLink>
            );
          })}
          
          <AuthButtons>
            <AuthButton to="/participant" className="btn-participant">
              <User />
              Espace Participant
            </AuthButton>
            <AuthButton to="/registration" className="btn-primary">
              <LogIn />
              S'inscrire
            </AuthButton>
          </AuthButtons>
        </Nav>

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </MobileMenuButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
