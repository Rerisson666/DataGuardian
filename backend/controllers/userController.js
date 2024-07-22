const pool = require('../config/dbConfig');

exports.getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
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
