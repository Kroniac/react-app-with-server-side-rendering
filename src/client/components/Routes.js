import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};
