//can use import as webpack is run on this file and babel will convert it to it's default form during compliation

import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  //some logic to initialize the store
  //and load some data to the store
  res.send(renderer(req, store));
});
app.listen(3000, () => {
  console.log('Port 3000');
});
