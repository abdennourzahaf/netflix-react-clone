import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { useForm } from 'react-hook-form';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onTouched',
  });
  const isValid =
    Object.keys(formState.dirtyFields).length === 2 &&
    Object.keys(errors).length === 0 &&
    errors.constructor === Object;

  const [error, setError] = useState('');

  const handleSignin = ({ email, password }) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => setError(error.message));

  return (
    <>
      <HeaderContainer dark={1}>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid='error'>{error}</Form.Error>}

          <Form.Base onSubmit={handleSubmit(handleSignin)}>
            <Form.Input
              ref={register({
                validate: (value) =>
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    value
                  ) || 'Please enter a valid email.',
              })}
              placeholder='Email'
              type='email'
              name='email'
              error={errors.email?.message}
              required
            />
            <Form.Input
              ref={register({
                required:
                  'Your password must contain between 8 and 15 characters.',
              })}
              type='password'
              name='password'
              required
              error={errors.password?.message}
              autoComplete='off'
              placeholder='Password'
            />
            <Form.Submit
              disabled={!isValid}
              type='submit'
              data-testid='sign-in'>
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
