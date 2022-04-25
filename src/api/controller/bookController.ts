import { Request, Response } from 'express';
import {
  deleteBook,
  getAllBooks, getBook, saveBook, updateBook,
} from '../service/bookService';

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

async function apiSaveBook(req: Request, res: Response) {
  /*
   #swagger.description = 'Save a book'
   #swagger.parameters['book'] ={
    in:'body',
    description: 'book informations',
    schema: { $ref: '#/definitions/book' },
  }
    #swagger.responses[200] = {
      description: 'book successfully saved',
      schema: { $ref: '#/definitions/book' },
    }
   #swagger.responses[500] = {
     description: 'could not save the book'
   }
  */

  const book = req.body;
  const bookSaved = await saveBook(book);
  res.status(201).json({ bookSaved });
}
async function apiUpdateBook(req: Request, res: Response) {
  /*
   #swagger.description = 'Update a book'
   #swagger.parameters['book'] ={
    in:'body',
    description: 'book informations',
    schema: { $ref: '#/definitions/book' },
  }
  #swagger.parameters['id'] ={
    description: 'id of book',
  }
    #swagger.responses[200] = {
      description: 'book successfully updated',
      schema: { $ref: '#/definitions/book' },
    }
   #swagger.responses[500] = {
     description: 'could not update the book'
   }
  */
  const { id } = req.params;
  const book = req.body;
  const bookUpdated = await updateBook(id, book);
  res.status(200).json({ bookUpdated });
}
async function apiDeleteBook(req: Request, res: Response) {
  /*
   #swagger.description = 'Delete a book'
   #swagger.parameters['id'] ={
    description: 'id of book',
  }
    #swagger.responses[200] = {
      description: 'book successfully deleted',
      schema: { $ref: '#/definitions/book' },
    }
   #swagger.responses[500] = {
     description: 'could not delete the book'
   }
  */
  const { id } = req.params;
  const bookDeleted = await deleteBook(id);
  res.status(200).json({ bookDeleted });
}

export default {
  apiGetAllBooks,
  apiGetBook,
  apiSaveBook,
  apiDeleteBook,
  apiUpdateBook,
};
