import React from 'react';
import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <PageHeader 
        title="我的作品集" 
        subtitle="探索我的創意項目"
      />
      <Projects />
    </>
  );
};

export default Home;
