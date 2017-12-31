import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Farid!</div>
      <button
        onClick={() => {
          console.log('Button Clicked');
        }}
      >
        Press Me!!
      </button>
    </div>
  );
};

export default Home;
