import React from 'react';
import {
  Container,
  Input,
  Label,
  Break,
  Button,
  InputWrapper,
  Text,
} from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ placeholder, ...restProps }) {
  return (
    <InputWrapper>
      <Input {...restProps} />
      <Label>{placeholder}</Label>
    </InputWrapper>
  );
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}{' '}
      <svg viewBox='0 0 6 12' xmlns='http://www.w3.org/2000/svg'>
        <desc>chevron</desc>
        <path
          d='M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z'
          fill='none'
          fill-rule='evenodd'></path>
      </svg>
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
