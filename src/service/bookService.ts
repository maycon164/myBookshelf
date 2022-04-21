import Book from '../model/BookModel';

async function getAllBooks() {
  const listBooks = await Book.find();

  return listBooks;
}

export default { getAllBooks };
