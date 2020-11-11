import React from 'react';
import {
  Featured,
  Horizontal,
  Vertical,
  Name,
  Info,
  Description,
  Seasons,
  ButtonsContainer,
  Button,
  Genres,
  Points,
  Year,
} from './styles/featured-movie';

export default function FeaturedMovie({ children, ...restProps }) {
  return <Featured {...restProps}> {children} </Featured>;
}

FeaturedMovie.Vertical = function FeaturedVertical({ children, ...restProps }) {
  return <Vertical {...restProps}>{children}</Vertical>;
};

FeaturedMovie.Horizontal = function FeaturedHorizontal({
  children,
  ...restProps
}) {
  return <Horizontal {...restProps}>{children}</Horizontal>;
};

FeaturedMovie.Name = function FeaturedName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

FeaturedMovie.Info = function FeaturedInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

FeaturedMovie.Points = function FeaturedPoints({ children, ...restProps }) {
  return <Points {...restProps}>{children}</Points>;
};

FeaturedMovie.Year = function FeaturedYear({ children, ...restProps }) {
  return <Year {...restProps}>{children}</Year>;
};

FeaturedMovie.Seasons = function FeaturedSeasons({ children, ...restProps }) {
  return <Seasons {...restProps}>{children}</Seasons>;
};

FeaturedMovie.Description = function FeaturedDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

FeaturedMovie.ButtonsContainer = function FeaturedButtonsContainer({
  children,
  ...restProps
}) {
  return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

FeaturedMovie.Button = function FeaturedButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

FeaturedMovie.Genres = function FeaturedGenres({ children, ...restProps }) {
  return <Genres {...restProps}>{children}</Genres>;
};
