import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import Item from './mongoDB/models/item.js'; // 모델 임포트
import Post from './mongoDB/models/post.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = 4100;
const mongoDBPort = 27017;

// MongoDB 연결 설정
const dbUri = `mongodb://localhost:${mongoDBPort}/blogDB`;
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB에 연결되었습니다.'))
  .catch(err => console.error('MongoDB 연결 실패:', err));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// 데이터 저장 라우트
app.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 데이터 조회 라우트
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts[0]);
    res.send(posts[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch('/posts/loveIt/:id', async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts[0].posts[id]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});