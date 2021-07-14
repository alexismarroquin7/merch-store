const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const apiRouter = require('./api-router');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/api', apiRouter);

server.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'client/build', 'index.html')
  );
});

module.exports = server;
