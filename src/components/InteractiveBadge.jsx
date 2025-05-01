import React from 'react';
import InteractiveBadge from '../components/InteractiveBadge';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to My Interactive Website</h1>
        <p className="text-lg mt-4">Explore the 3D interactive badge below!</p>
      </header>
      <section className="flex justify-center items-center">
        <InteractiveBadge />
      </section>
    </div>
  );
};

export default Home;