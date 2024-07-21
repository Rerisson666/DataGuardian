const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/dbConfig');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
