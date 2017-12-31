import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {
  const content = renderToString(<Home />);

  return (
    <html>
      <head />
      <body>
        <div id="root" />
        <script src="bundle.js" />
      </body>
    </html>
  );
};
