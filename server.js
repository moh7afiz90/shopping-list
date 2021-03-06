const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./Routes/api/items')


const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mango
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Conneted..'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items)

// Port Config
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`))