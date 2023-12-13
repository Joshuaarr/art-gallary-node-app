import * as dao from "./dao.js";
function UserRoutes(app) {
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
  const findUserById = async (req, res) => {
    const id = req.params.id;
    const user = await dao.findUserById(id);
    res.json(user);
  };
  const findByUsername = async (req, res) => {
    const username = req.params.username;
    const user = await dao.findUserByUsername(username);
    res.json(user);
  };
  const findUserByCredentials = async (req, res) => {
    const { username, password } = req.params;
    const user = await dao.findUserByCredentials(username, password);
    res.json(user);
  };

  const findUsersByRole = async (req, res) => {
    const role = req.params.role;
    const users = await dao.findUsersByRole(role);
    res.json(users);
  };

  const createUser = async (req, res) => {
    const { username, password, email, role } = req.params;
    const user = await dao.createUser({
      username,
      password,
      email,
      role,
    });
    res.json(user);
  };

  const updateUser = async (req, res) => {
    const id = req.params.id;
    const newUser = req.body;
    const status = await dao.updateUser(id, newUser);
    const currentUser = await dao.findUserById(id);
    req.session["currentUser"] = currentUser;
    res.json(status);
  };
  const updateFirstName = async (req, res) => {
    const id = req.params.id;
    const newFirstName = req.params.newFirstName;
    const status = await dao.updateUser(id, { firstName: newFirstName });
    res.json(status);
  };
  const deleteUser = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteUser(id);
    res.json(status);
  };

  const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await dao.findUserByCredentials(username, password);
    if (user) {
      const currentUser = user;
      req.session["currentUser"] = currentUser;
      res.json(currentUser);
    } else {
      res.sendStatus(403);
    }
  };
  const signout = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };
  const signup = async (req, res) => {};
  const account = async (req, res) => {
    const currentUser = req.session["currentUser"];
    console.log("current user", currentUser);
    res.json(currentUser);
  };

  app.post("/api/users/signout", signout);
  app.post("/api/users/login", login);
  app.post("/api/users/account", account);

  app.delete("/api/users/:id", deleteUser);
  app.get("/api/users/updateFirstName/:id/:newFirstName", updateFirstName);
  app.post("/api/users/signup/:username/:password/:email/:role", createUser);
  app.get("/api/users/role/:role", findUsersByRole);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:id", findUserById);
  app.get("/api/users/username/:username", findByUsername);
  app.get("/api/users/credentials/:username/:password", findUserByCredentials);
  app.put("/api/users/:id", updateUser);
}

export default UserRoutes;
