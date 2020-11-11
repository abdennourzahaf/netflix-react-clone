import styled from 'styled-components/macro';

export const Featured = styled.section`
  height: 100vh;
  background-size: 'cover';
  background-position: 'center';
  background-image: ${({ path }) =>
    `url(https://image.tmdb.org/t/p/original${path})`};
  @media (max-width: 760px) {
    height: 90vh;
  }
`;

export const Vertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #000 0%, transparent 40%),
    linear-gradient(to bottom, #000 0%, transparent 40%);
  @media (max-width: 760px) {
    background: linear-gradient(to top, #000 0%, transparent 40%),
      linear-gradient(to bottom, #000 30%, transparent 80%);
  }
`;

export const Horizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #000 1%, transparent 85%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 60px;
  padding-bottom: 80px;
  padding-top: 70px;
  box-sizing: border-box;
  @media (max-width: 760px) {
    padding-top: 70px;
    padding-left: 30px;
    padding-bottom: 80px;
  }
`;

export const Name = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  @media (max-width: 760px) {
    font-size: 40px;
  }
`;

export const Info = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  display: flex;
  & div {
    margin: 0 10px;
  }
  & div:first-of-type {
    margin-left: 0;
  }
  & div:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const Points = styled.div`
  color: #46d369;
  svg {
    height: 14px;
    margin-left: 2px;
  }
`;

export const Year = styled.div`
  color: #fff;
`;

export const Seasons = styled.div`
  color: #fff;
`;

export const Description = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #bbb;
  max-width: 40%;
  @media (max-width: 760px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 15px;
`;

export const Button = styled.button`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  border: none;
  cursor: pointer;
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

export const Genres = styled.div`
  margin-top: 15px;
  margin-bottom: 25px;
  font-size: 18px;
  color: #bbb;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
