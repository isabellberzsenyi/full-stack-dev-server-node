import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tweet: String,
  topic: String,
  userName: String,
  verified: Boolean,
  handle: String,
  time: String,
  title: String,
  attachments: {
    video: String,
  },
  logoImage: String,
  "avatar-image": String,
  stats: {
    comments: Number,
    retweets: Number,
    likes: Number,
    dislikes: Number
  }
}, {collection: 'tuits'});
export default schema;