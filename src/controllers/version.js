'use strict'

const path = require('path');

const version_view = path.resolve('src/' + 'views/' + 'version.html');


class Version {
    getVersion(req, res) {
        res.sendFile(version_view)
    }
}

module.exports = new Version();
