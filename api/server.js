const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/api', (req, res) => {
  res.status(200).json({
    greet: "hello"
  });
});

server.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'client/build', 'index.html')
  );
});

module.exports = server;
