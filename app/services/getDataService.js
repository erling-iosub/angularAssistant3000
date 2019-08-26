assistant.factory(`getDataService`,
  function ($http) {

      var getMoney = () => {
        return new Promise((resolve, reject) => {
          $http.get("http://localhost:8000/exchange")
            .then((response) => {
              var exchange = response.data.rates;
              resolve(exchange);
            }, (reason) => {
              //console.log(reason)
              reject(reason)
            })
        })
      }
      var getWeather= () => {
        return new Promise((resolve, reject) => {
          $http.get("http://localhost:8000/weather?units=si")
            .then((response) => {
              var weather = response.data.currently;
              // var hour = new Date().toJSON().slice(11,19)
              //   console.log( hour , "am cerut vremea")
              resolve(weather);
            }, (reason) => {
              //console.log("error")
              reject(reason)
            })
        })
      }
      var getTime= () => {
        var time = new Date().toTimeString();
        return time
        }

      var getDay= () => {
        var dayNumber = new Date().getDay();
        return dayNumber
      }

      return {
        getMoney: getMoney,
        getWeather: getWeather,
        getTime: getTime,
        getDay: getDay,
      }
  })