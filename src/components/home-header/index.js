import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Header,
  Right,
  Left,
  Logo,
  Profile,
  Dropdown,
  Picture,
  Link,
  Group,
} from './styles/home-header';

export default function HomeHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
}

HomeHeader.Right = function HomeHeaderRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};

HomeHeader.Logo = function HomeHeaderLogo({ to, children, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps}>{children}</Logo>;
    </ReachRouterLink>
  );
};

HomeHeader.Left = function HomeHeaderLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

HomeHeader.Profile = function HomeHeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

HomeHeader.Dropdown = function HomeHeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

HomeHeader.Picture = function HomeHeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

HomeHeader.TextLink = function HomeHeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

HomeHeader.Group = function HomeHeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
