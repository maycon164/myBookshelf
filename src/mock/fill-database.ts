import { connection, closeConnection } from '../api/database/connection';
import Book from '../api/model/BookModel';
import listOfBooks from './booksMock.json';

connection();

async function main() {
  const books = listOfBooks;

  try {
    await Book.deleteMany();
    await Book.create(books);
    console.log('mock books inserted');
  } catch (e) {
    console.log(e);
  } finally {
    closeConnection();
  }
}

main();
