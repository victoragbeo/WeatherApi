const { response } = require("express");
const express = require("express");
const https = require('https');



app = express();

app.get("/", function(res, req) {
// get request on http module
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=64cab248ae9d22786a12f8f6442361e0&units=metric';
    
    https.get(url, function(response){
        console.log(response.statusCode);
// got a hold of data from response
        response.on("data", function(data) {
            // Json.parse turns json string into Javascript object
            // turned data from response into JS object by using JSON.parse
          const weatherData = JSON.parse(data);
        // went thru JS obj to get specific data we wanted from object   
          const temp = weatherData.main.temp;
          const weatherDescription = weatherData.weather[0].description;
          const icon = weatherData.weather[0].icon
          const imageURL = "http://openweathermap.org/img/wn" + icon + "@2x.png";
          res.write("<p>The weather is currently " + weatherDescription + "</p>");
          res.write("<h1>The temperature in London is " + temp + " degrees Celsius.</h1>");
          res.send("<h1>The temperature in Chicago is " + temp + " degrees Celsius.</h1>");
          console.log(weatherData);  
        }); 
    });

  res.send("Server is up and running.");

})
 


app.listen(3000, function() {
    console.log("Server is running on port 3000.");
}); 