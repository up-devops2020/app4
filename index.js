const express = require('express');
const app = express();

app.get('/', function(req, res){
	  res.send("Hello app4");
});

app.listen(8080,function(){
	  console.log('app4 is running in port 8080');
})
