import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import MoviePageForm from '../../components/MoviePageForm';
import moviesAPI from '../../API/movie-api';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const query = searchQuery.get('query');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    setSearchQuery({ query: inputValue });

    setInputValue('');
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovies = async () => {
      try {
        const movies = await moviesAPI.fetchFilmsByQuery(query);
        setMovies(movies.results);
      } catch (error) {
        setError('Something went wrong. Please try again later.');
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <MoviePageForm
        onSubmit={handleSubmitForm}
        onChange={handleInputChange}
        value={inputValue}
      />

      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: '/movies' }}>
                {movie.original_title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {movies.length === 0 && query && (
        <p>We don't have any movies for this query.</p>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default MoviesPage;
