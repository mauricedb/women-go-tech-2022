import React from 'react';

const movie19404 = {
  id: 19404,
  overview:
    'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh.',
  release_date: '1995-10-20',
  title: 'Dilwale Dulhania Le Jayenge',
  vote_average: 8.7,
};

const Movie: React.FC = () => {
  return (
    <form>
      <div>
        <label>Title</label>
        <p>{movie19404.title} </p>
      </div>

      <div>
        <label>Overview</label>
        <p>{movie19404.overview} </p>
      </div>

      <div>
        <label>Vote average</label>
        <p>{movie19404.vote_average} </p>
      </div>

      <div>
        <label>Release date</label>
        <p>{movie19404.release_date} </p>
      </div>
    </form>
  );
};

export default Movie;
