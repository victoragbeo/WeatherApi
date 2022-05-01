const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', function(req, res) {
//     res.send("<h1>Hello, World</h1>")
// });

// app.get('/about', function(req, res){
//     res.send("<p>Hello, I'm Victor! I'm learning to become a software engineer by the end of 2021.</p>")
// });

// app.get('/contact', function(req, res){
//     res.send("Contact me at victor@gmail.com")
// });



app.listen(3000, function(){
    console.log("Server is running in port 3000");
})