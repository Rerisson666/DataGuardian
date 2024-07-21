const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  User.getAll((users) => {
    res.json(users);
  });
};

exports.getUserById = (req, res) => {
  User.getById(req.params.id, (user) => {
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  });
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  User.create(newUser, (insertId) => {
    res.status(201).json({ id: insertId });
  });
};

exports.updateUser = (req, res) => {
  const updatedUser = req.body;
  User.update(req.params.id, updatedUser, () => {
    res.status(204).send();
  });
};

exports.deleteUser = (req, res) => {
  User.delete(req.params.id, () => {
    res.status(204).send();
  });
};
