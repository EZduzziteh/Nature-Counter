createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv')
require('dotenv').config();

const decodeIDToken = require('./config/firebaseauth');
var indexRouter = require('./routes/index');
var articleRouter = require('./routes/articleRouter');
var benefitRouter = require('./routes/benefitRouter');
var userRouter = require('./routes/userRouter');
var goalRouter = require('./routes/goalRouter');
var goalRouter = require('./routes/goalRouter');
var symptomRouter = require('./routes/symptomRouter');
var userDetailViewRouter = require('./routes/userDetailViewRouter');
var userGoalViewRouter = require('./routes/userGoalViewRouter');
var healthCategoryRouter = require('./routes/healthCategoriesRouter');
var nearParkRouter = require('./routes/nearParkRouter');
var favoriteLocRouter = require('./routes/favoriteLocRouter');

// const redisClient = require('./config/redis')

const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const journalRouter = require('./routes/journalRouter');
//const url = 'mongodb+srv://Ruchi30:RJ2NVRZcSLJpOXVW@cluster0.f8c1f.mongodb.net/natureCounterDb?retryWrites=true&w=majority';
// const url = process.env.AZURE_DB_URL;
//let url ="mongodb+srv://admin:HOCLOL323@naturecounterdb.j50yd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //process.env.MONGO_DB_URL;

console.log(process.env.FIREBASE_KEY);
console.log(process.env.AZURE_DB_URL);
console.log(process.env.TEST_USER_BEARER_TOKEN);

let url = process.env.MONGO_DB_URL;
url = url.slice(0, -1); //remove the last character of the string
url = url.substring(1); //remove first character of the string
console.log("hi");
console.log(url);

//link to my own personal db
//const url = 'mongodb+srv://myUser:myPassword@cluster0.jmqkcax.mongodb.net/?retryWrites=true&w=majority';
/*

TEST_USER_BEARER_TOKEN="eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwNTU5YzU5MDgzZDc3YWI2NDUxOThiNTIxZmM4ZmVmZmVlZmJkNjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmF0dXJlLWNvdW50ZXItOTA4OGIiLCJhdWQiOiJuYXR1cmUtY291bnRlci05MDg4YiIsImF1dGhfdGltZSI6MTY3NDc5MTMyMCwidXNlcl9pZCI6IlNBeDB4dTF5Z2VXUzc1Y1FsSFVwbm1zUG9XNTMiLCJzdWIiOiJTQXgweHUxeWdlV1M3NWNRbEhVcG5tc1BvVzUzIiwiaWF0IjoxNjc0NzkxMzIwLCJleHAiOjE2NzQ3OTQ5MjAsImVtYWlsIjoiYW5kcmV3QHRlc3QuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFuZHJld0B0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TJn3gWMea9IvM2837TuWUkXeCNGLSa4sSB_7tPa9Xjlf9Erf6ljG0iypehPrebrOfHaNXvoMjh36uUOLQLyQFboKjUD_7yM6Ke713PKHgvo5OsdN1mHd6gkZZc14AZJ6pPuNGsnzseRrb8P2UGy8wJT68eTLQNmBlYIKOzHvsjeTLJ2vDVzw5ADXD05XBJz_V10iOsdvZ9HNbgN_S5WnLxy98SCQ0RviXIX4dz0YuapqINduoE9inAIbC1U-hiwwDkcTcA_iHz44CfY7Ylv5wGBsgO9zSNVsgLyZqd5j54PbyYrMJBsT1ilcOqghEwNG4JKtT2iN32dY7f4IwlWgtQ"

AZURE_DB_URL="mongodb://nature:4eh7TsEB5z7vHsVCAgvu9YEGwRXrL2I6utJ3RGF7id2NbJVJXh6bC5mIXg6CXGDJkBjVGfTrgLsNACDbF3vRLQ==@nature.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@nature@"

MONGO_DB_URL="mongodb+srv://admin:HOCLOL323@naturecounterdb.j50yd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

FIREBASE_KEY="AIzaSyAqrpdh3Exhk73xyU4nBDAlzYSiitlgePs"


*/

//const url = "mongodb+srv://admin:HOCLOL323@naturecounterdb.j50yd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

connect.then((db) => {
    console.log('Connected to db');
}, (err) => { console.log(err); })

var app = express();

app.all('*', (req, res, next) => {
    if (req.secure) {
        return next();
    }
    else {
        //res.redirect(307, 'https://' + req.hostname + ':' + app.get('secPort') + req.url);
        return next();
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(decodeIDToken);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/articles', articleRouter);
app.use('/benefits', benefitRouter);
app.use('/userdetails', userRouter);
app.use('/usergoals', goalRouter);
app.use('/symptoms', symptomRouter);
app.use('/user_details_views', userDetailViewRouter);
app.use('/user_goals_views', userGoalViewRouter);
app.use('/healthCategories', healthCategoryRouter);
app.use('/natureAreas', nearParkRouter);
app.use('/journal', journalRouter);
app.use('/favoriteLoc', favoriteLocRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // res.json({ message: "Welcome to Nature Counter." });
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
