import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { useForm } from 'react-hook-form';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onTouched',
  });

  const [error, setError] = useState('');

  const isValid =
    Object.keys(formState.dirtyFields).length === 3 &&
    Object.keys(errors).length === 0 &&
    errors.constructor === Object;

  const handleSignup = ({ firstName, email, password }) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer dark={1}>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSubmit(handleSignup)}>
            <Form.Input
              ref={register({
                required: 'First name is required.',
                maxLength: 128,
              })}
              placeholder='First name'
              type='text'
              name='firstName'
              error={errors.firstName?.message}
              required
            />
            <Form.Input
              ref={register({
                validate: (value) =>
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    value
                  ) || 'Please enter a valid email.',
              })}
              placeholder='Email or phone number'
              type='email'
              name='email'
              error={errors.email?.message}
              required
            />
            <Form.Input
              ref={register({
                validate: (value) =>
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,256}$/.test(
                    value
                  ) ||
                  'Password should contain at least 8 characters, one lowercase letter, one uppercase letter, one numeric digit, and one special character.',
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
              data-testid='sign-up'>
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to='/signin'>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <button>Learn more.</button>
          </Form.TextSmall>
          <Form.Recaptcha>
            The information collected by Google reCAPTCHA is subject to the
            Google Privacy Policy and Terms of Service, and is used for
            providing, maintaining, and improving the reCAPTCHA service and for
            general security purposes (it is not used for personalized
            advertising by Google).
          </Form.Recaptcha>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
