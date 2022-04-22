import { Request, Response } from 'express';
import { getAllBooks, getBook } from '../service/bookService';

async function apiGetAllBooks(req: Request, res: Response) {
  try {
    const books = await getAllBooks();
    res.status(200).json({ books });
  } catch (error) {
    // TO DO: personalized excepetion: [EMPTY LIST]
    res.status(500).json({ error: error.message });
  }
}

async function apiGetBook(req: Request, res: Response) {
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
