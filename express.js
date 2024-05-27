var express = require('express');
var app = express();
app.get('/',function(req,res){
    console.log("Got a GET request for the homepage");
    res.send('hello GET');
})
app.post('/',function(req,res){
    console.log("Got a post request for the homepage");res.send('Hello Post');
})
app.delete('/del_user',function(req,res){
    console.log("Got a GET request for /list_user");
    res.send('Page Listning');
})
app.get('/ab*cd',function(req,res){
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})
var server = app.listen(4000,function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listning at http://%s:%s",host,port)
})