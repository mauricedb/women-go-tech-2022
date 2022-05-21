import type { NextPage } from 'next';
import Greetings from '../src/greetings';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Greetings name="Women Go Tech 2022" />
    </div>
  );
};

export default Home;
