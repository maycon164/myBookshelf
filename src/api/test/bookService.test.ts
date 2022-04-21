import { createSandbox } from 'sinon';
import Book from '../model/BookModel';
import { getAllBooks, getBook, saveBook } from '../service/bookService';

const sandbox = createSandbox();
const { stub } = sandbox;

describe('stack of tests BookService', () => {
  beforeEach(() => {
    sandbox.restore();
  });

  const bookMock = {
    title: 'Example',
    author: 'sr Example ',
    genre: 'Example',
    pags: 100,
  };

  const bookMockSaved = {
    id: '1234',
    ...bookMock,
  };

  it('test that always pass', () => {
    expect(2 + 2).toBe(4);
  });

  it('getAllBooks: should get a list of books', async () => {
    stub(Book, 'find').resolves([{}]);

    expect(await getAllBooks()).toMatchObject([{}]);
  });

  it('getAllBooks: should throw a error when getting a empty list', async () => {
    stub(Book, 'find').resolves([]);

    await expect(getAllBooks()).rejects.toThrow(new Error('No books available'));
  });

  it('getBook: should get a book by id 1', async () => {
    stub(Book, 'findById').withArgs('1').resolves({});

    expect(await getBook('1')).toMatchObject({});
  });

  it('getBook: should throw a error when getting a book with id 123454', async () => {
    stub(Book, 'findById').withArgs('12345').resolves(undefined);

    await expect(getBook('12345')).rejects.toThrow(new Error('Book not found'));
  });

  /* TO DO:
    improve this test to accept a specific parameter BookToSave
       stub(Book, 'create').withArgs(bookMock)
       .resolves(bookMockSaved);
  */
  it('saveBook: should save a book object', async () => {
    stub(Book, 'create').resolves(bookMockSaved);

    expect(await saveBook(bookMock)).toMatchObject(bookMockSaved);
  });

  it('saveBook: should be rejected', async () => {
    stub(Book, 'create').resolves(null);

    await expect(saveBook(bookMock)).rejects.toThrow(new Error("Couldn't save the book"));
  });
});
