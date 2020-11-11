import React from 'react';
import { Header, Right, Left, Logo, User } from './styles/home-header';

export default function HomeHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
}

HomeHeader.Right = function HomeHeaderRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};

HomeHeader.Logo = function HomeHeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

HomeHeader.Left = function HomeHeaderLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

HomeHeader.User = function HomeHeaderUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};
