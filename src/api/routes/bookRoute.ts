import { Router } from 'express';
import controller from '../controller/bookController';

const router = Router();

router.get('/', controller.apiGetAllBooks);
router.get('/:id', controller.apiGetBook);
router.post('/', controller.apiSaveBook);
router.put('/', controller.apiUpdateBook);
router.delete('/:id', controller.apiDeleteBook);

export default router;
