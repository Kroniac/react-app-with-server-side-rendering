//can use import as webpack is run on this file and babel will convert it to it's default form during compliation
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});
app.listen(3000, () => {
  console.log('Port 3000');
});
