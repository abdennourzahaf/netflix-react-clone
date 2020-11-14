import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { Home, Browse, SignIn } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { Loading, ScrollToTop } from './components';

const SignUp = lazy(() => import('./pages/signup'));
const Home = lazy(() => import('./pages/home'));
const Browse = lazy(() => import('./pages/browse'));
const SignIn = lazy(() => import('./pages/signin'));

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}>
            <SignUp />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}>
            <Home />
          </IsUserRedirect>
        </Switch>
      </Suspense>
    </Router>
  );
}
