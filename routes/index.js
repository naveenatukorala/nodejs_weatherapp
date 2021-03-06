
const express = require('express');
var router = express.Router();
var router = express.Router();

router.get('/', function (req, resp) {
  var axios = require('axios')
  city = req.query['city']
axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=3c330ea3089059fcb33aad06e58b4cc0`)
    .then(function (res) {
      this.city = res.data.name

      this.minTemp = res.data.main.temp_min
      this.maxTemp = res.data.main.temp_max
      this.pressure = res.data.main.pressure
      this.humidity = res.data.main.humidity + '%'
      this.wind = res.data.wind.speed + 'm/s'
      this.summary = res.data.weather[0].description

      const myObj =
                 {
                   city: this.city,
                   
                   temp_min: this.minTemp,
                   maxTemp: this.maxTemp,
                   pressure: this.pressure,
                   humidity: this.humidity,
                   wind: this.wind,
                   summary: this.summary
                 }

      const myObjStr = JSON.stringify(myObj)
      console.log(myObjStr)

      resp.send(myObjStr)
    })
    .catch(function (error) {
      console.log(error)
      resp.send(error)
    });

});

module.exports = router;
