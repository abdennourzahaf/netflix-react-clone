import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  /* margin-top: 20px; */
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  max-width: 450px;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  margin-right: 1px;
  @media (min-width: 1000px) {
    height: 70px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  color: #8c8c8c;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.1s ease all;
`;

export const Input = styled.input`
  width: 100%;
  border: solid 1px #8c8c8c;
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: 14px;
    /* bottom: 10px; */
    /* left: 20px; */
    font-size: 13px;
    font-weight: 600;
    /* opacity: 1; */
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  font-weight: 400;
  white-space: nowrap;
  border: 0;
  cursor: pointer;
  svg {
    margin-left: 12px;
    height: 34%;
  }
  svg path {
    fill: #fff;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
  @media (min-width: 1000px) {
    height: 70px;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
