const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const path = require('path');

//my rest endpoints or routes
const users = require('./routes/api/users');
const eventCenters = require('./routes/api/eventCenters');

const app = express()

//bodyparseer now path of express
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//db config
const db = require('./config/keys').mongoURI;

//connection to database
mongoose.connect(db,{useNewUrlParser:true})
    .then(() =>console.log('mongoDB connected'))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());
//Passport Config
require('./config/passport')(passport);

//Routes middleware
app.use('/api/users',users);
app.use('/api/eventCenters',eventCenters);

//env variables
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
  