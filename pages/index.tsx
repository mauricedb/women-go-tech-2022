import type { NextPage, GetServerSideProps } from 'next';
import { MovieInterface } from '../src/types';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import MovieList from '../src/movie-list';

interface Props {
  movies: MovieInterface[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const rsp = await fetch(
    'https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies'
  );
  const movies = await rsp.json();

  return {
    props: {
      movies,
    },
  };
};

const Home: NextPage<Props> = ({ movies }) => {
  return <MovieList movies={movies} />;
};

export default Home;
