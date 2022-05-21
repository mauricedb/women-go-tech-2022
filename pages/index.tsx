import type { NextPage } from 'next';
import Movie from '../src/movie';
import { MovieInterface } from '../src/types';
import 'bootstrap/dist/css/bootstrap.css';

const movie19404: MovieInterface = {
  id: 19404,
  overview:
    'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh.',
  release_date: '1995-10-20',
  title: 'Dilwale Dulhania Le Jayenge',
  vote_average: 8.7,
};

const Home: NextPage = () => {
  return (
    <div className="container">
      <Movie movie={movie19404} />
    </div>
  );
};

export default Home;
