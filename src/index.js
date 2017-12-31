//can use import as webpack is run on this file and babel will convert it to it's default form during compliation
import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer(req));
});
app.listen(3000, () => {
  console.log('Port 3000');
});
