import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
function connection():void {
  mongoose.connect(`mongodb://${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`)
    .then(() => {
      console.log('connected to mongodb');
    });
}

function closeConnection(): void {
  mongoose.connection.close();
}

export { connection, closeConnection };
