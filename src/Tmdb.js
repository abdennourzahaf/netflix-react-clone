const API_KEY = '19f84e11932abbc79e6d83f82d6d1045';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFecth = async (endpoint) => {
  return (await fetch(`${API_BASE}${endpoint}`)).json();
};

const obj = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Netflix Originals',
        items: await basicFecth(
          `/discover/tv?with_network=213&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'trending',
        title: 'Trending',
        items: await basicFecth(
          `/trending/all/week?language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Top Rated',
        items: await basicFecth(
          `/movie/top_rated?&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'action',
        title: 'Action',
        items: await basicFecth(
          `/discover/movie?with_genres=28&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comedy',
        items: await basicFecth(
          `/discover/movie?with_genres=35&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'horror',
        title: 'Horror',
        items: await basicFecth(
          `/discover/movie?with_genres=27&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'family',
        title: 'Family',
        items: await basicFecth(
          `/discover/movie?with_genres=10751&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'drama',
        title: 'Drama',
        items: await basicFecth(
          `/discover/movie?with_genres=18&language=en&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case 'movei':
          info = await basicFecth(
            `/movie/${movieId}?language=en&api_key=${API_KEY}`
          );
          break;
        case 'tv':
          info = await basicFecth(
            `/tv/${movieId}?language=en&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};

export default obj;
