'use strict'

const routes = require('express').Router();

const { statusController, versionController, fibonacciController } = require('./controllers');


routes.get('/', (req, res) => res.send('Hello world'));
routes.get('/ping', statusController.ping);
routes.get('/version', versionController.getVersion)
routes.get('/block/:n', fibonacciController.fibonacci);


module.exports = routes;
