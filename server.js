import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import helloController from "./controllers/hello-controller.js";
import tuitController from './controllers/tuit-controller.js';
import userController from './controllers/user-controller.js';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/webdev';

mongoose.connect(uri);
const app = express();
app.use(express.json());
app.use(cors());
helloController(app);
userController(app);
tuitController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);
