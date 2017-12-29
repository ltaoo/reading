const Express = require('express');
const Webtask = require('webtask-tools');
const bodyParser = require('body-parser');

const app = Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/reading')(app);
require('./routes/test')(app);

module.exports = Webtask.fromExpress(app);
