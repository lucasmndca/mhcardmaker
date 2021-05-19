const config = require('./config.json');
const express = require('express');
const app = express();
const routes = require('./src/routes/routes');

app.use(routes);

app.listen(config.defaultPort, () => console.log(`Server running on port ${config.defaultPort}`));
