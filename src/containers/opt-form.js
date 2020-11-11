import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { OptForm } from '../components';
import * as ROUTES from '../constants/routes';

export const OptFormContainer = () => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onTouched',
  });
  const history = useHistory();
  const handleEmail = ({ email }) =>
    history.push({
      pathname: ROUTES.SIGN_UP,
      data: { email },
    });
  return (
    <OptForm onSubmit={handleSubmit(handleEmail)}>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Text>
      <OptForm.Break />
      <OptForm.Input
        placeholder='Email address'
        type='email'
        required
        ref={register({
          validate: (value) =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              value
            ) || 'Please enter a valid email.',
        })}
        name='email'
        error={errors.email?.message}
      />
      <OptForm.Submit>Get started</OptForm.Submit>
    </OptForm>
  );
};
