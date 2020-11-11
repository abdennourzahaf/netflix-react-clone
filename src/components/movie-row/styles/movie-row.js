import styled from 'styled-components/macro';
import { css } from 'styled-components';

const sharedStyle = css`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.2s;
  @media (max-width: 760px) {
    opacity: 1;
  }
`;

export const Left = styled.div`
  ${sharedStyle}
  left: 0;
`;

export const Right = styled.div`
  ${sharedStyle}
  right: 0;
`;

export const Row = styled.div`
  margin-bottom: 30px;
  h2 {
    color: #fff;
    margin: 0px 0px 20px 30px;
    font-size: 32px;
  }
  &:hover ${Left}, &:hover ${Right} {
    opacity: 1;
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const List = styled.div`
  transition: all ease 0.2s;
  margin-left: ${({ X }) => `${X}px`};
  width: ${({ W }) => `${W * 150}px`};
`;

export const Item = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }
  img:hover {
    transform: scale(1);
  }
`;
