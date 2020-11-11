import React, { useContext, useEffect, useState } from 'react';
import { Loading, MovieRow } from '../components';
import { FirebaseContext } from '../context/firebase';
import Tmdb from '../Tmdb';
import FeaturedMovieContainer from './featured-movie';
import HomeHeaderContainer from './home-header';
import MovieRowContainer from './movie-row';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export default function NewBrowseContainer() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter((i) => i.slug === 'originals');
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
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

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <HomeHeaderContainer
        firstName={user.displayName}
        photoURL={user.photoURL}
        black={blackHeader}
      />

      {featuredData && <FeaturedMovieContainer item={featuredData} />}

      <MovieRow.Group>
        {movieList.map((item, key) => (
          <MovieRowContainer
            key={key}
            title={item.title}
            items={item.items}></MovieRowContainer>
        ))}
      </MovieRow.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
