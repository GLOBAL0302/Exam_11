import express from 'express';
import auth, { RequestWithUser } from '../middleware/auth';
import Item from '../models/Item';
import { Error } from 'mongoose';
import { imageUpload } from '../multer';
import category from '../models/Category';

const itemsRouter = express.Router();

itemsRouter.get('/', async (req, res, next) => {
  try {
    const category_id = req.query.category_id;
    const id = req.query.postId;
    let filter = {};
    if (id) filter = { _id: id };

    const items = await Item.find(filter).populate({
      path: 'user',
      select: 'username',
    });
    res.status(200).send(items);
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      res.status(400).send({ error });
    }
  }
  next();
});

itemsRouter.post('/', imageUpload.single('image'), auth, async (req, res) => {
  const expressReq = req as RequestWithUser;
  const user = expressReq.user;

  try {
    const item = new Item({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      user: user._id,
      price: req.body.price,
      image: req.file ? 'images' + req.file.filename : null,
    });

    await item.save();
    res.status(200).send({ message: 'added successfully', item });
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      res.status(400).send({ error });
    }
  }
});

export default itemsRouter;
