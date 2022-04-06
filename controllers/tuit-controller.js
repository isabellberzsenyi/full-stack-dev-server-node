import posts from "./tuits/tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime() + '';
  newTuit.likes = 0;
  newTuit.topic = "Web Development";
  newTuit.userName = "ReactJS";
  newTuit.verified = false;
  newTuit.handle = "ReactJS";
  newTuit.time = "2h";
  newTuit['avatar-image'] = "/tuiter/images/nasa.png";
  newTuit.logoImage = "/tuiter/images/nasa.png";
  newTuit.stats = {
    "comments": 123,
    "retuits": 234,
    "likes": 345
  };
  tuits.push(newTuit);
  res.json(newTuit);
}
const findAllTuits = (req, res) => {
  res.json(tuits);
}
const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
  res.sendStatus(200);
}
const deleteTuit = (req, res) => {
  const tuitIdToDelete = req.params.id;
  tuits = tuits.filter(t => t._id !== tuitIdToDelete);
  res.sendStatus(200);
}

const tuitController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

export default tuitController;