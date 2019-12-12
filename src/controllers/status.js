'use strict'

const path = require('path');

const ping_view = path.resolve('src/' + 'views/' + 'ping.html');


class Status {
    ping(req, res) {
        const { accept } = req.headers

        if(accept === '*/*')
            return res.status(200).json({ success: true, message: 'pong' });

        res.sendFile(ping_view);
    }
}

module.exports = new Status();
