const express = require('express');
const promptController = require('../controllers/prompt-controller');

const routes = express.Routes();

routes.post('api/prompt', promptController.sendText);

module.exports = routes;