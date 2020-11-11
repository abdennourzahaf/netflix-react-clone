import React from 'react';
import { HomeHeader } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function HomeHeaderContainer({ ...restProps }) {
  return (
    <HomeHeader {...restProps}>
      <HomeHeader.Right>
        <HomeHeader.Logo
          src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
          alt=''
        />
      </HomeHeader.Right>
      <HomeHeader.Left>
        <HomeHeader.User
          src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
          alt=''
        />
      </HomeHeader.Left>
    </HomeHeader>
  );
}
