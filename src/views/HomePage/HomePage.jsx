import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import moviesAPI from '../../API/movie-api';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const films = await moviesAPI.fetchFilmsTrending();
        setFilms(films.results);
      } catch (error) {
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      {loading && <p>Loading...</p>}

      {!!films.length && (
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: '/' }}>
                {film.original_title || film.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default HomePage;
