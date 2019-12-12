'use strict'

require('dotenv').config({ path: '.env' });

const app = require('./src/server');
const port = process.env.PORT || 3001;


app.listen(port, () => console.log(`api runing, listen port ${port}`));
