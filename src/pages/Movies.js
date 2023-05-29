import React from 'react';
import ButtonPanel from '../components/ButtonPanel';
import PlayButton from '../components/utilities/PlayButton';

const Movies = () => (
  <section className="container mt-5 md:mt-10 mx-auto text-slate-400">
    <div className="flex flex-col">
      <div className="flex flex-row">
        <PlayButton />
        <h2 className="ml-4 md:ml-0 flex flex-row text-white font-extralight text-3xl">Movies</h2>
      </div>
      <ButtonPanel className="mt-5" type="Movies" />
    </div>
  </section>
);

export default Movies;
