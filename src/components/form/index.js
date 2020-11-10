import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  InputWrapper,
  Label,
  Link,
  Input,
  Recaptcha,
  InputError,
  RecapthaButton,
  Submit,
} from './styles/form';
const showRecaptchaContext = createContext({});

export default function Form({ children, ...restProps }) {
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  return (
    <showRecaptchaContext.Provider value={{ showRecaptcha, setShowRecaptcha }}>
      <Container {...restProps}>{children}</Container>
    </showRecaptchaContext.Provider>
  );
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.ShowRecapthaButton = function ShowRecapthaButton({
  children,
  ...restProps
}) {
  const { showRecaptcha, setShowRecaptcha } = useContext(showRecaptchaContext);
  return (
    <RecapthaButton
      showRecaptcha={showRecaptcha}
      onClick={() => setShowRecaptcha(true)}
      {...restProps}>
      {children}
    </RecapthaButton>
  );
};

Form.Recaptcha = function FormRecaptcha({ children, ...restProps }) {
  const { showRecaptcha } = useContext(showRecaptchaContext);

  return (
    <Recaptcha showRecaptcha={showRecaptcha} {...restProps}>
      {children}
    </Recaptcha>
  );
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = React.forwardRef(function FormInput(
  { error, placeholder, ...restProps },
  ref
) {
  return (
    <>
      <InputWrapper error={error}>
        <Input {...restProps} ref={ref} />
        <Label>{placeholder}</Label>
      </InputWrapper>
      <InputError>{error}</InputError>
    </>
  );
});

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
