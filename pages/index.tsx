import type { NextPage } from 'next';
import { MovieInterface } from '../src/types';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import MovieList from '../src/movie-list';

const Home: NextPage = () => {
  const [movies, setMovies] = React.useState<MovieInterface[]>([]);

  React.useEffect(() => {
    async function fetchMovies() {
      const rsp = await fetch(
        'https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies'
      );
      const data = await rsp.json();
      setMovies(data);
    }

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
