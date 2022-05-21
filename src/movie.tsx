import React from 'react';
import { MovieInterface } from './types';

interface Props {
  movie: MovieInterface;
}

const Movie: React.FC<Props> = ({ movie }) => {
  const [theMovie, setTheMovie] = React.useState(movie);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(theMovie, null, 2));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={theMovie.title}
          onChange={(e) => setTheMovie({ ...theMovie, title: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Overview</label>
        <textarea
          className="form-control"
          value={theMovie.overview}
          onChange={(e) =>
            setTheMovie({ ...theMovie, overview: e.target.value })
          }
          rows={5}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Vote average</label>
        <input
          className="form-control"
          type="number"
          value={theMovie.vote_average}
          onChange={(e) =>
            setTheMovie({ ...theMovie, vote_average: e.target.valueAsNumber })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Release date</label>
        <input
          className="form-control"
          value={theMovie.release_date}
          onChange={(e) =>
            setTheMovie({ ...theMovie, release_date: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Movie;
