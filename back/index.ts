import express from 'express';
import cors from 'cors';
import * as mongoose from 'mongoose';
import config from './config';
import usersRouter from './routers/users';
import itemsRouter from './routers/items';
import categoriesRouter from './routers/categories';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/users', usersRouter);
app.use('/items', itemsRouter);
app.use('/categories', categoriesRouter);

const run = async () => {
  await mongoose.connect(config.db);

  app.listen(port, () => {
    console.log(`Server running at port http://localhost:${port}`);
  });

  process.on('exit', () => {
    mongoose.disconnect();
  });
};

run().catch((err) => {
  console.error(err);
});
