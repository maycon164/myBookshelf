import express from 'express';

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, World' });
});

app.listen(3001, () => {
  console.log('server listen at port 3001');
});
