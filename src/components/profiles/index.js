import React from 'react';
import {
  Container,
  Title,
  List,
  Item,
  Picture,
  Inner,
  Name,
} from './styles/profiles';

export default function Profiles({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ bg, ...restProps }) {
  return (
    <Picture
      {...restProps}
      bg={bg ? `/images/users/${bg}.png` : '/images/misc/loading.gif'}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
