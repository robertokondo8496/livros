/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { MongoClient } from 'mongodb';

import * as cors from 'cors';

import { authRouter } from './app/routes/auth';
import { livrosRouter } from './app/routes/livros';
import { json } from 'body-parser';
import { requireJwtToken } from './app/middlewares/jwt';

MongoClient.connect(
  'mongodb://livros_devcontainer_db_1:27017',
).then((client: MongoClient) => {
  app.locals.db = client.db('livros');
  console.log('Conectado ao MongoDB.');
}).catch(err => {
  console.error(err);
});

const app = express();

app.use(cors());
app.use(json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/auth', authRouter);

app.use('/api/livros', requireJwtToken, livrosRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
