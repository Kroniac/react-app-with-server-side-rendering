//can use import as webpack is run on this file and babel will convert it to it's default form during compliation
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  const html = `
  <html>
    <head></head>
        <body>
            <div id="root"></div>
            <script src="bundle.js"></script>
        </body>
  </html>`;
  res.send(html);
});
app.listen(3000, () => {
  console.log('Port 3000');
});
