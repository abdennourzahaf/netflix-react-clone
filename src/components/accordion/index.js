import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  InnerBody,
  Header,
  Body,
  ToggleIcon,
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      <ToggleIcon
        src='/images/icons/add.png'
        // style={transform: toggleShow ? 'rotate(45deg)'  : ''}
        style={
          toggleShow
            ? { transform: 'rotate(45deg) scale(1.1)' }
            : { transform: '' }
        }
        alt={toggleShow ? 'Close' : 'Open'}
      />
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <Body toggleShow={toggleShow} {...restProps}>
      <InnerBody>{children}</InnerBody>
    </Body>
  );
};
