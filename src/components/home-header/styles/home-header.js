import styled from 'styled-components/macro';

export const Header = styled.header`
  position: fixed;
  z-index: 900;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 56px;
  background: ${({ black }) => (black ? '#000' : 'transparent')};
  transition: background ease 0.5s;
  @media (max-width: 760px) {
    padding: 18px 30px;
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

export const Link = styled.p`
  color: ${({ active }) => (active === 'true' ? '#ffffff' : '#ffffffcc')};
  text-decoration: none;
  margin-right: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 42px;
  height: 42px;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
`;

export const Dropdown = styled.div`
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  top: 42px;
  right: 0;
  border-radius: 4px;
  transition: opacity 0.4s 0.1s;

  ${Group}:first-of-type ${Link} {
    color: #ffffff;
  }

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    padding: 12px;
    border-bottom: 1px solid gray;

    &:last-of-type {
      border-bottom: none;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    opacity: 1;
    pointer-events: all;
  }
`;
