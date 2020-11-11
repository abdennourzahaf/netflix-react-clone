import styled from 'styled-components/macro';

export const Header = styled.header`
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
  background: ${({ black }) => (black ? '#141414' : 'transparent')};
  transition: background ease 0.5s;
  @media (max-width: 760px) {
    padding: 10px 30px;
  }
`;

export const Right = styled.div``;

export const Logo = styled.img`
  height: 32px;
`;

export const Left = styled.div``;

export const User = styled.img`
  height: 40px;
  border-radius: 3px;
`;
