import mongoose from 'mongoose';
import config from './config';
import Category from './models/Category';
import User from './models/User';
import { randomUUID } from 'node:crypto';
import Item from './models/Item';

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

  const [user1, user2] = await User.create({
    username:"beka@",
    password:"123",
    display_name:"beka",
    phone_number:"554342321",
    token:randomUUID(),

  },
    {
      username:"kuba@",
      password:"123",
      display_name:"kuba",
      phone_number:"034123413",
      token:randomUUID(),

    }
    );
  const [t1, t2, t3, t4] = await Category.create(
    {
      title: 'AllItems',
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


  await Item.create({
    title:"Cat",
    description:"selling cat",
    user:user1,
    price:233,
    category:t4,
    image:"fixture/nopics.png",
  },

    {
      title:"car",
      description:"selling car",
      user:user2,
      price:23,
      category:t2,
      image:"fixture/cars.jpeg",
    },
    )

  await db.close();
};

run().catch((err) => {
  console.error(err);
});