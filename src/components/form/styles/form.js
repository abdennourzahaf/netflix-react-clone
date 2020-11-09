import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  background: #333;
  border-radius: 4px;
  border: 0;
  line-height: 50px;
  height: 50px;
  /* margin-bottom: 20px; */

  &:last-of-type {
    margin-bottom: 30px;
  }
  &:after {
    border-bottom: 2px solid #e87c03;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    bottom: 0;
    ${({ error }) => error && 'content: "";'}
    display: block;
    height: 6px;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
  }
`;
export const InputError = styled.div`
  color: #e87c03;
  margin-bottom: 6px;
  padding: 6px 3px;
  font-size: 13px;
`;
export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 20px;
  color: #8c8c8c;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.1s ease all;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  background: transparent;
  border-radius: 4px;
  border: 0;
  color: #fff;
  line-height: 50px;
  padding: 16px 20px 0;
  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: 14px;
    font-size: 12px;
    font-weight: 400;
    color: #9f9f9f;
  }
  &:focus,
  &:valid {
    outline: none;
    background: #505050;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
