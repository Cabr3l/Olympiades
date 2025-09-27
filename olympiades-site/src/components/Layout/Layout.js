import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { theme } from '../../styles/theme';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.neutral.gray50};
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 70px; /* Pour compenser le header fixe */
  min-height: calc(100vh - 70px);
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
