import { Header } from 'layout/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLayoutWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <StyledLayoutWrapper>
      <Header />
      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>
    </StyledLayoutWrapper>
  );
};
