const express = require('express');
const StickyController = require('./controllers/StickyController');

const routes = express.Router();

routes.get('/stickys', StickyController.index);
routes.post('/stickys', StickyController.store);
routes.delete('/stickys/:id', StickyController.delete);

module.exports = routes;