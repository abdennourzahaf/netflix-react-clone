import styled from 'styled-components/macro';
import { css } from 'styled-components';

const sharedStyle = css`
  position: absolute;
  width: 40px;
  height: 220px;
  background-color: transparent;
  z-index: 99;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.2s;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 760px) {
    opacity: 1;
  }
`;

export const Group = styled.section`
  margin-top: -150px;
  @media (max-width: 760px) {
    margin-top: -80px;
  }
`;

export const Left = styled.div`
  ${sharedStyle}
  left: 0;
  ${({ X }) => !X && `display: none;`}
`;

export const Right = styled.div`
  ${sharedStyle}
  right: 0;
  ${({ X, Y }) => X === Y && `display: none;`}
`;

export const Row = styled.div`
  h2 {
    color: #fff;
    margin: 0px 0px 0px 30px;
    @media (max-width: 760px) {
      margin: 0px 0px 0px 30px;
    }
  }
  &:hover ${Left}, &:hover ${Right} {
    opacity: 1;
  }
`;

export const ListArea = styled.div`
  position: relative;
  overflow-x: hidden;
  padding-left: 30px;
`;

export const List = styled.div`
  height: 280px;
  display: flex;
  align-items: center;
  transition: all ease 0.2s;
  box-sizing: border-box;
  margin-left: ${({ X }) => `${X}px`};
  width: ${({ W }) => `${W * 150}px`};
`;
