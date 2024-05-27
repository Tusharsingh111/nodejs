var express=require('express');
var app = express();
app.get('/',function(req,res){
    res.send('Hello Tushar');
})
var server = app.listen(8081,function(){
    var host=server.address().address
    var port=server.address().port

    console.log("example of app listning at https://%s:%s",host,port)
})