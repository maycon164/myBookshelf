import { Schema, model } from 'mongoose';

const bookSchema = new Schema({

  title: String,
  author: String,
  genre: String,
  pags: Number,
  image: String,

});

export default model('Book', bookSchema);
