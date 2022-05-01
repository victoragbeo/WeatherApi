const express = require('express');

const app = express();
// get() defines what should happen with a spec location(home root), then callback func tells what to do when that request happens.
app.get('/', function(req, res){
    res.send('Hello');
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});