import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MovieInterface } from './types';

interface Props {
  movies: MovieInterface[];
}

const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="card mb-3" style={{ maxWidth: 620 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                className="img-fluid rounded-start"
                alt={movie.title}
                height="309"
                width="206"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <Link href={`/movie/${movie.id}`} className="card-link">
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
