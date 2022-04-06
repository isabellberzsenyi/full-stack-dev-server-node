import posts from "./tuits/tuits.js";
import * as tuitsDao from "./tuits/tuits-dao.js";
let tuits = posts;

const createTuit = async (req, res) => {
  const newTuit = {
    ...req.body,
    "topic": "Web Development!",
    "userName": "ReactJS",
    "verified": false,
    "handle": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "attachments": {
      "video": "unKvMC3Y1kI"
    },
    "logoImage": "/tuiter/images/reactjs.png",
    "avatar-image": "/tuiter/images/reactjs.png",
    "stats": {
      "comments": 123,
      "retweets": 234,
      "likes": 345
    }
  }

  const insertTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertTuit);
}
const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
}
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.sendStatus(200);
}
const deleteTuit = async (req, res) => {
  const tuitIdToDelete = req.params.tid;
  await tuitsDao.deleteTuit(tuitIdToDelete);
  res.sendStatus(200);
}

const tuitController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

export default tuitController;