import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: {
    type: String,
  },
});

const Category = mongoose.model('Category', CategorySchema);
export default Category;
