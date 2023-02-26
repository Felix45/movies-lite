import React from 'react';
import ButtonPanel from '../components/ButtonPanel';

const Movies = () => (
  <section className="container mt-5 md:mt-10 mx-auto text-slate-400">
    <div className="flex flex-col">
      <h2 className="ml-4 md:ml-0 text-white font-extralight text-3xl">Movies</h2>
      <ButtonPanel className="mt-5" />
    </div>
  </section>
);

export default Movies;
