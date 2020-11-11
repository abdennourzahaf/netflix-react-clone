import React from 'react';
import { FeaturedMovie } from '../components';
// import { ReactComponent as Star } from '/images/icons/star.svg';

export default function FeaturedMovieContainer({ item }) {
  let firstDate = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let descr = item.overview;
  if (descr.length > 200) {
    descr = descr.substring(0, 200) + '...';
  }
  return (
    <FeaturedMovie path={item.backdrop_path}>
      <FeaturedMovie.Vertical>
        <FeaturedMovie.Horizontal>
          <FeaturedMovie.Name>{item.original_name} </FeaturedMovie.Name>
          <FeaturedMovie.Description>{descr}</FeaturedMovie.Description>
          <FeaturedMovie.Info>
            <FeaturedMovie.Points>
              {item.vote_average}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='star'
                class='svg-inline--fa fa-star fa-w-18'
                role='img'
                viewBox='0 0 576 512'>
                <path
                  fill='currentColor'
                  d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                />
              </svg>
            </FeaturedMovie.Points>
            <FeaturedMovie.Year>{firstDate.getFullYear()}</FeaturedMovie.Year>
            <FeaturedMovie.Seasons>
              {item.number_of_seasons} Season
              {item.number_of_seasons !== 1 ? 's' : ''}
            </FeaturedMovie.Seasons>
          </FeaturedMovie.Info>
          <FeaturedMovie.Genres>
            Genres: <strong> {genres.join(', ')} </strong>
          </FeaturedMovie.Genres>
          <FeaturedMovie.ButtonsContainer>
            <FeaturedMovie.Button>► Play</FeaturedMovie.Button>
            <FeaturedMovie.Button inversed>+ Add to list</FeaturedMovie.Button>
          </FeaturedMovie.ButtonsContainer>
        </FeaturedMovie.Horizontal>
      </FeaturedMovie.Vertical>
    </FeaturedMovie>
  );
}
