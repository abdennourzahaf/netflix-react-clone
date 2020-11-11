import styled from 'styled-components/macro';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  background: linear-gradient(to top, #000000, #00000099);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 16px 8px;
  border-radius: 12px;
  color: #fff;
  background: linear-gradient(to bottom, #000000dd 20%, transparent 90%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
`;

export const Container = styled.p`
  margin: 0;
`;

export const Title = styled.span`
  font-size: 16px;
  margin-right: 6px;
  font-weight: 500;
`;

export const Vote = styled.span`
  color: #46d369;
  font-size: 14px;
  white-space: nowrap;
  svg {
    height: 12px;
    margin-left: 2px;
  }
`;

export const Item = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
  transform: scale(0.9);
  transition: transform ease 0.2s;
  img {
    width: 100%;
    border-radius: 12px;
  }
  &:hover {
    z-index: 1;
    transform: scale(1.2);
    ${Info} {
      opacity: 1;
    }
  }
  &:first-of-type:hover {
    transform: translateX(20%) scale(1.2);
  }
  &:last-of-type:hover {
    transform: translateX(-20%) scale(1.2);
  }
`;
