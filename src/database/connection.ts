import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
function connection() {
  mongoose.connect(`mongodb://${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`)
    .then(() => {
      console.log('connected to mongodb');
    });
}

export default { connection };
