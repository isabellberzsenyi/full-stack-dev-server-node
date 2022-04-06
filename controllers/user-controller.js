import people from './users/users.js';
let users = people;

const updateUser = (req, res) => {
  const userId = req.params['uid'];
  const updateUser = req.body;
  users = users.map((u) => u._id === userId ? updateUser : u);

  res.sendStatus(200);
}

const deleteUser = (req, res) => {
  const userId = req.params['uid'];
  users = users.filter(u => u._id !== userId);
  res.sendStatus(200);
}

const createUser = (req, res) => {
  const newUser = req.body;
  newUser._id = (new Date()).getTime() + '';
  users.push(newUser);
  res.json(newUser);
 }
 

const findUsersByType = (type) => {
  users.filter((u) => u.type === type);
  return users;
}

const findAllUsers = (req, res) => {
  const type = req.query['type'];
  if (type) {
    res.json(findUsersByType(type));
    return;
  }
  res.json(users);
 }

 const findUserById = (req, res) => {
  const userId = req.params.uid;
  const user = users.find(u => u._id === userId);
  res.json(user);
 }

const userController = (app) => {
 app.get('/api/users', findAllUsers);
 app.get('/api/users/:uid', findUserById);
 app.post('/api/users', createUser);
 app.delete('/api/users/:uid', deleteUser);
 app.put('/api/users/:uid', updateUser);
}

export default userController;