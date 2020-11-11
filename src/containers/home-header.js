import React, { useContext } from 'react';
import { HomeHeader } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import logo from '../logo.svg';

export default function HomeHeaderContainer({
  photoURL,
  firstName,
  ...restProps
}) {
  const { firebase } = useContext(FirebaseContext);
  return (
    <HomeHeader {...restProps}>
      <HomeHeader.Right>
        <HomeHeader.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
      </HomeHeader.Right>
      <HomeHeader.Left>
        <HomeHeader.Profile>
          <HomeHeader.Picture src={photoURL} />
          <HomeHeader.Dropdown>
            <HomeHeader.Group>
              <HomeHeader.Picture src={photoURL} />
              <HomeHeader.TextLink>{firstName}</HomeHeader.TextLink>
            </HomeHeader.Group>
            <HomeHeader.Group>
              <HomeHeader.TextLink onClick={() => firebase.auth().signOut()}>
                Sign out
              </HomeHeader.TextLink>
            </HomeHeader.Group>
          </HomeHeader.Dropdown>
        </HomeHeader.Profile>
      </HomeHeader.Left>
    </HomeHeader>
  );
}
