import React from 'react';
import {
  Container,
  Input,
  Label,
  Break,
  Submit,
  InputWrapper,
  Error,
  Text,
} from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = React.forwardRef(function OptFormInput(
  { placeholder, error, ...restProps },
  ref
) {
  return (
    <>
      <InputWrapper error={error}>
        <Input ref={ref} {...restProps} />
        <Label>{placeholder}</Label>
        <Error>{error}</Error>
      </InputWrapper>
    </>
  );
});

OptForm.Submit = function OptFormSubmit({ children, ...restProps }) {
  return (
    <Submit type='submit' {...restProps}>
      {children}
      <svg viewBox='0 0 6 12' xmlns='http://www.w3.org/2000/svg'>
        <desc>chevron</desc>
        <path
          d='M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z'
          fill='none'
          fillRule='evenodd'></path>
      </svg>
    </Submit>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
