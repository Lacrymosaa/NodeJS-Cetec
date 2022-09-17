const { Router } = require('express');
const { get } = require('mongoose');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({message: 'Server is on...'});

});

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)

module.exports = routes;