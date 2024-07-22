const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API do DataGuardian');
});

module.exports = app;
