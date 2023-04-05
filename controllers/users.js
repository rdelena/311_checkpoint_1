const users = require("../data/index");

module.exports = {
  // Get all
  listUsers: (req, res) => {
    res.json(users);
  },
  // Get specific
  showUsers: (req, res) => {
    const userPost = users.find(
      (users) => users.id === parseInt(req.params.id)
    );
    if (!userPost) {
      res.status(404).send("Error 404: User Not Found");
      return;
    }
    res.json(userPost);
  },
  // Post
  createUsers: (req, res) => {
    const user = {
      id: users.length + 1,
      ...req.body,
    };
    if (!req.body.name) {
      res.status(400).send("Error: All Fields Must Be Completed");
      return;
    }
    users.push(user);
    res.json(user);
  },
  // Put
  updateUsers: (req, res) => {
    const updateUsers = users.find(
      (user) => user.id === parseInt(req.params.id)
    );
    if (!updateUsers) {
      res.status(400).send("Error 400: Bad Request");
      return;
    }
    const index = users.indexOf(updateUsers);
    const newUser = { ...updateUsers, ...req.body };

    users.splice(index, 1, newUser);
    res.json(newUser);
  },
  // Delete
  deleteUsers: (req, res) => {
    const deleteUser = users.findIndex(
      (user) => user.id === parseInt(req.params.id)
    );
    if (!deleteUser) {
      res.status(400).send("Error 400: Bad Request");
      return;
    }
    users.splice(deleteUser, 1);
    res.send("User has been deleted");
  },
};
