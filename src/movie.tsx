import React from 'react';
import { MovieInterface } from './types';

interface Props {
  movie: MovieInterface;
}

const Movie: React.FC<Props> = ({ movie }) => {
  const [theMovie, setTheMovie] = React.useState(movie);

  return (
    <form>
      <div>
        <label>Title</label>
        <input
          value={theMovie.title}
          onChange={(e) => setTheMovie({ ...theMovie, title: e.target.value })}
        />
      </div>

      <div>
        <label>Overview</label>
        <textarea
          value={theMovie.overview}
          onChange={(e) =>
            setTheMovie({ ...theMovie, overview: e.target.value })
          }
          rows={5}
        />
      </div>

      <div>
        <label>Vote average</label>
        <input
          type="number"
          value={theMovie.vote_average}
          onChange={(e) =>
            setTheMovie({ ...theMovie, vote_average: e.target.valueAsNumber })
          }
        />
      </div>

      <div>
        <label>Release date</label>
        <input
          value={theMovie.release_date}
          onChange={(e) =>
            setTheMovie({ ...theMovie, release_date: e.target.value })
          }
        />
      </div>
    </form>
  );
};

export default Movie;
