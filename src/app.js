"use strict";
//모듈
const express = require('express');
const app =  express();

const PORT = 3000;

//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/",home); //use-> 미들웨어를 등록해주는 메서드

module.exports = app;
/*
//서버 GET 요청
app.get('/pet', function(요청,응답){
    res.send('펫 쇼핑할 수 있는 페이지입니다.')
});

app.get('/beauty', function(요청,응답){
    응답.send('뷰티용품을 살 수 있는 페이지입니다.')
});

//GET 요청 시 html 파일 전송
app.get('/', function(요청,응답){
    응답.render("home/index");
});

app.get('/login', function(요청,res){
    res.render("home/login");
});

app.get('/write', function(요청,응답){
    응답.sendFile(__dirname + '/write.html')
});
*/