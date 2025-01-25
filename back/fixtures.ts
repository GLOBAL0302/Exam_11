import mongoose from 'mongoose';
import config from './config';
import Category from './models/Category';

const run = async () => {
  await mongoose.connect(config.db);
  const db = mongoose.connection;

  try {
    await db.dropCollection('category');
    await db.dropCollection('users');
    await db.dropCollection('items');
  } catch (error) {
    console.error(error);
  }

  const [t1, t2, t3, t] = await Category.create(
    {
      title: 'All Items',
    },
    {
      title: 'Cars',
    },
    {
      title: 'Computers',
    },
    {
      title: 'Others',
    },
  );

  await db.close();

  run().catch((err) => {
    console.error(err);
  });
};
