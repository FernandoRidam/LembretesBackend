const express = require('express');
const StickyController = require('./controllers/StickyController');

const routes = express.Router();

routes.get('/stickys', StickyController.index);
routes.post('/sticky/new', StickyController.store);
routes.delete('/sticky/delete/:id', StickyController.delete);

module.exports = routes;