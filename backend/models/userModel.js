const db = require('../config/dbConfig');

const User = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  },

  getById: (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) throw err;
      callback(results[0]);
    });
  },

  create: (data, callback) => {
    const sql = 'INSERT INTO users SET ?';
    db.query(sql, data, (err, result) => {
      if (err) throw err;
      callback(result.insertId);
    });
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE users SET ? WHERE id = ?';
    db.query(sql, [data, id], (err) => {
      if (err) throw err;
      callback();
    });
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err) => {
      if (err) throw err;
      callback();
    });
  }
};

module.exports = User;
