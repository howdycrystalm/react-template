const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var cors = require('cors')


app.use(cors())

app.use('/', express.static('js'));

app.listen(process.env.PORT || 8081);  