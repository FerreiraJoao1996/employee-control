import React from 'react';
import MenuLateral from '../Menus/MenuLateral';
import Header from '../Menus/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MenuLateral />
      {children}
    </>
  );
};

export default Layout;