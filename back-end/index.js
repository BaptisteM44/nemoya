const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const emailRouter = require('./routes/email');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/send-email', emailRouter);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});