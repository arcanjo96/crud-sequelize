const express = require('express');
const routes = express.Router();

const UserController = require('../app/controllers/UserController');

routes.get('/users', UserController.index);
routes.post('/register', UserController.create);
routes.post('/update/:id', UserController.update);
routes.get('/delete/:id', UserController.destroy);
routes.get('/find/:id', UserController.find);
routes.get('/edit/:id', UserController.edit);

routes.get('/', (req, res) => {
    res.render('welcome');
});

routes.get('/newUser', (req, res) => {
    res.render('newUser');
});

module.exports = routes;