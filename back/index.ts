import express from 'express';
import cors from 'cors';
import * as mongoose from 'mongoose';
import config from './config';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

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
