import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const port = 4100;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

