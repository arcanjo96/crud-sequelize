const express = require('express');
const routes = express.Router();

const UserController = require('../app/controllers/UserController');

routes.get('/users', UserController.index);
routes.post('/register', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.destroy);
routes.get('/user/:id', UserController.find);

module.exports = routes;