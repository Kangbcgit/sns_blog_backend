// models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  id: Number,
  title: String,
  subTitle: String,
  profileImg: String,
  preview: String,
  contents: String,
  author: String,
  tags: [String],
  loveIt: Number
});

const Post = mongoose.model('Post', postSchema);

export default Post;
