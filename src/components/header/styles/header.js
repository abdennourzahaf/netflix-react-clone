import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ dark }) =>
      dark &&
      (dark === 2
        ? `linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.9) 100%
    ),`
        : `linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6) 0,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    ),`)}
    ${({ home }) =>
      home &&
      `linear-gradient(to top, #111 10%, transparent), linear-gradient(to right, #111 30%, transparent 70%),`}
    url(${({ src }) =>
      src
        ? `../images/misc/${src}.jpg`
        : 'https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/17ce521f-f232-4529-96e7-6fc022c3d8c6/DZ-en-20201019-popsignuptwoweeks-perspective_alpha_website_small.jpg'})
    center / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
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

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  transition: opacity 0.2s;

  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  img {
    filter: brightness(0) invert(1);
    width: 20px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 42px;
  height: 42px;
  cursor: pointer;
  border-radius: 4px;
`;

export const Dropdown = styled.div`
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: black;
  padding: 12px;
  top: 42px;
  right: 0;
  border-radius: 10px;
  transition: opacity 0.4s 0.1s;

  ${Group}:first-of-type ${Link} {
    color: #ffffff;
  }

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 12px;

    &:last-of-type {
      margin-bottom: 0;
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

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 60px;
  font-weight: bold;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #999;
  max-width: 80%;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Logo = styled.img`
  height: 32px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 32px;
  }
`;

export const ButtonsContainer = styled.div``;

export const Button = styled.button`
  display: inline-block;
  font-size: 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  transition: all ease 0.2s;
  background-color: ${({ inversed }) => (inversed ? '#333' : '#fff')};
  color: ${({ inversed }) => (inversed ? '#fff' : '#000')};
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 760px) {
    font-size: 10px;
  }
`;
