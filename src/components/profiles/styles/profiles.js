import styled from 'styled-components/macro';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 3.5vw;
  text-align: center;
  font-weight: 500;
  margin-top: 0;
  @media screen and (min-width: 1600px) {
    font-size: 30px;
  }
  @media screen and (max-width: 780px) {
    font-size: 26px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.span`
  line-height: 1.2em;
  min-height: 1.8em;
  color: grey;
  display: block;
  text-align: center;
  font-size: 1.6vw;
  font-weight: 600;
  margin: 0.6em 0;
  text-overflow: ellipsis;
  overflow: hidden;
  @media screen and (min-width: 1600px) {
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Picture = styled.div`
  height: 10vw;
  width: 10vw;
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px;
  box-sizing: border-box;
  position: relative;
  text-decoration: none;
  background-image: url(${({ bg }) => `${bg}`});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
`;

export const Item = styled.li`
  cursor: pointer;
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    box-shadow: 0 0 0 3px white;
  }

  &:hover ${Name} {
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
