import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';
import bookRoute from './api/routes/bookRoute';
import { connection } from './api/database/connection';

const app = express();
connection();
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/books', bookRoute);

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, World' });
});

app.listen(3001, () => {
  console.log('server listen at port 3001');
});
