import React from 'react';
import { renderToString } from 'react-dom/server';

export default () => {
  return `
  <html>
    <head></head>
    <body>
      <div id="root"></div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
