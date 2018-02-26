var express = require('express');
var app = express();

app.get('/',function(req,res){
  var header = req.headers;
  var os = header["user-agent"];
  os = os.slice(os.indexOf("(")+1,os.indexOf(")"));
  var lang = header["accept-language"];
  lang = lang.slice(0,lang.indexOf(","));
  var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  var obj = { "ip":ip, "os":os , "language":lang ,};
  res.json(obj);
})
app.listen(3000,console.log("app on port 3000"));
