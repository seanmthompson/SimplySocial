var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var appService =require('./apis/apiService');

var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser());
app.use(express.static('.'));

app.listen(port);

app.get('/', function (request, response) {
    response.sendfile("index.html");
});

app.get('/api/allPosts', function(request, response){
    response.send(appService.getAllPosts());
});

app.get('/api/photoFeed', function(request, response){
    response.send(appService.getPhotoFeed());
});

app.get('/api/userProfile', function(request, response){
    response.send(appService.getUserProfile());
});

app.get('/api/userFeed', function(request, response){
    response.send(appService.getUserFeed());
});

app.get('/api/userFollowers', function(request, response){
    response.send(appService.getUserFollowers());
});

app.get('/api/userFollowing', function(request, response){
    response.send(appService.getUserFollowing());
});

app.get('/api/userSettings', function(request, response){
    response.send(appService.getUserSettings());
});

module.exports=app;