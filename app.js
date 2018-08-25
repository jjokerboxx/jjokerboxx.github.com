var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'pug');
app.set('views', './views');
//app.locals


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
// 콘솔 로그는 터미널에 보이는 로그!
app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});