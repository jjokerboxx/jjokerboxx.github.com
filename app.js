var express = require('express');
var app = express(); // app이라는 인스턴스로 익스프레스 활성화
var fs = require('fs'); //fs라는 인스턴스로 파일시스템 활성화
// var mysql = require('mysql'); - npm install mysql --save// MYSQL설치 및 활성화
var Body_parser = require('body-parser');


app.use(Body_parser.json());
app.use(Body_parser.urlencoded({extended : true}));




// 홈페이지 설명 글
app.get('/', function(req, res){
    res.send('<h1>Hello! welcome to my shabby house.</h1>');
});

app.get('/topic', function(req,res){
    fs.readFile('/data',function(err, data){
        if(err){
            res.status(500).send('Internal Server Error!');
        }
        res.render('views');
    })
});
app.post(['/topic', '/topic/:id'],function(req, res){
    fs.writeFile('.data', {title:files, description:description}, function(err, data){
        if(err){
            res.status(500).send('Server Error!');
        }
        res.render('views');
    })
});
/*
app.get('???', function(req, res){
    something else

});
*/
