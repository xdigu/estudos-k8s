'use strict'

const status = require('./status');
const version = require('./version');
const fibonacci = require('./fibonacci')


module.exports = {
    statusController: status,
    versionController: version,
    fibonacciController: fibonacci
}
