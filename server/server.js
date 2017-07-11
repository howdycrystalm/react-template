const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var cors = require('cors')


app.use(cors())

app.use('/', express.static('js'));

app.listen(process.env.PORT || 3000, function () {
  console.log("runnin' through the 3000 with my woes");
});  