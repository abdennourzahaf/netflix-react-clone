import React, { useEffect, useState } from 'react';
import Tmdb from '../Tmdb';
import FeaturedMovieContainer from './featured-movie';
import HomeHeaderContainer from './home-header';
import MovieRowContainer from './movie-row';

export default function NewBrowseContainer() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === 'originals');
      let randonChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randonChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className='page'>
      <HomeHeaderContainer black={blackHeader} />

      {featuredData && <FeaturedMovieContainer item={featuredData} />}

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRowContainer
            key={key}
            title={item.title}
            items={item.items}></MovieRowContainer>
        ))}
      </section>
      {movieList.length <= 0 && (
        <div className='loading'>
          <img
            src='https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif'
            alt='loading'></img>
        </div>
      )}
    </div>
  );
}
