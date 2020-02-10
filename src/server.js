const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://ridam:5533@cluster0-gtsrp.mongodb.net/lembretes?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

server.use( cors() );
server.use( express.json() );
server.use( routes );

server.listen(3333);