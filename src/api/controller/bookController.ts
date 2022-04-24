import { Request, Response } from 'express';
import { getAllBooks, getBook } from '../service/bookService';

async function apiGetAllBooks(req: Request, res: Response) {
  /*
   #swagger.description = 'Get All Books available in database'

  #swagger.responses[200] = {
    description: 'books successfully obtained',
    schema: {$ref: '#/definitions/books'}
  }
  #swagger.responses[500] = {
    description: 'no books available'
  }
  */
  try {
    const books = await getAllBooks();
    res.status(200).json({ books });
  } catch (error) {
    // TO DO: personalized excepetion: [EMPTY LIST]
    res.status(500).json({ error: error.message });
  }
}

async function apiGetBook(req: Request, res: Response) {
  /*
   #swagger.description = 'Get a book by the past id'
   #swagger.parameters['id'] ={
    description: 'id of book'
  }
    #swagger.responses[200] = {
      description: 'book successfully obtained',
      schema: { $ref: '#/definitions/book' },
    }
   #swagger.responses[500] = {
     description: 'no book available'
   }
  */

  try {
    const { id } = req.params;
    const book = await getBook(id);
    res.status(200).json({ book });
  } catch (error) {
    // TO DO: personalized excepetion: [NOT FOUND]
    res.status(500).json({ error: error.message });
  }
}

export default {
  apiGetAllBooks,
  apiGetBook,
};
