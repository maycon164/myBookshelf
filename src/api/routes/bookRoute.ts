import { Router } from 'express';
import controller from '../controller/bookController';

const router = Router();

router.get('', controller.apiGetAllBooks);
router.get('/:id', controller.apiGetBook);

export default router;
