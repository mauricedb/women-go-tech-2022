import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import 'bootstrap/dist/css/bootstrap.css';

import { MovieInterface } from '../../src/types';
import Movie from '../../src/movie';

interface Props {
  movie: MovieInterface;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const rsp = await fetch(
    `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/${query.movieId}`
  );
  const movie = await rsp.json();

  return {
    props: {
      movie,
    },
  };
};

const MoviePage: NextPage<Props> = ({ movie }) => {
  return (
    <div className="container">
      <Movie movie={movie} />
    </div>
  );
};

export default MoviePage;
