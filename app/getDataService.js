assistant.factory(`getDataService`,
  function ($http) {
    return {
      getMoney: () => {
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
      },
      getWeather: () => {
        return new Promise((resolve, reject) => {
          $http.get("http://localhost:8000/weather?units=si")
            .then((response) => {
              var weather = response.data.currently;
              resolve(weather);
            }, (reason) => {
              //console.log("error")
              reject(reason)
            })
        })
      },
      getTime: () => {
        var time = new Date().toTimeString();
        return time
        },
      getDay: () => {
        var dayNumber = new Date().getDay();
        return dayNumber
      }
    }
  })