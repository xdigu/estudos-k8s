'use strict'

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const routes = require('./routes')

class Server {
    constructor() {
        this.express = express();
        this.middleares();
        this.routes();
    }

    middleares() {
        this.express.use(express.json())
        this.express.use(morgan('dev'));
        this.express.use(helmet());
    }

    routes() {
        this.express.use(routes)
    }
}

module.exports = new Server().express;
