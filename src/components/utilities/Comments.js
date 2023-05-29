import React from 'react';
import PlayButton from './PlayButton';

const CommentBox = () => (
  <>
    <section className="flex flex-col mt-5">
      <div className="flex flex-row ml-5">
        <PlayButton />
        <h2 className="text-white font-bold text-4xl">Comments</h2>
      </div>
    </section>
  </>
);

export default CommentBox;
