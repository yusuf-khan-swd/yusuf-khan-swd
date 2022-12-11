import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../../Projects/Projects';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <Projects></Projects>
    </div>
  );
};

export default Home;