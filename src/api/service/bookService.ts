import Book from '../model/BookModel';

interface BookToSave{
  title: String,
  author: String,
  genre: String,
  pags: Number,
  image?: String,

}

async function getAllBooks() {
  const listBooks = await Book.find();

  if (listBooks.length === 0) {
    throw new Error('No books available');
  }

  return listBooks;
}

async function saveBook(book:BookToSave) {
  const bookSaved = await Book.create(book);

  if (!bookSaved) {
    throw new Error("Couldn't save the book");
  }

  return bookSaved;
}

async function updateBook(id:string, book: BookToSave) {
  const bookUpdated = await Book.findByIdAndUpdate(id, book);

  if (!bookUpdated) {
    throw new Error("Couldn't update the book");
  }

  return bookUpdated;
}

async function deleteBook(id:string) {
  const bookDeleted = await Book.findByIdAndDelete(id);

  if (!bookDeleted) {
    throw new Error("Couldn't update the book");
  }

  return bookDeleted;
}

async function getBook(id:string) {
  const book = await Book.findById(id);
  if (!book) {
    throw new Error('Book not found');
  }
  return book;
}

export {
  getAllBooks, getBook, saveBook, updateBook, deleteBook,
};
