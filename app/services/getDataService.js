assistant.factory(`getDataService`,
  function ($http) {

    var getFootball = () => {
      return new Promise((resolve,reject) => {
        $http.get("http://localhost:8000/football")
        .then ( (response)=>{
          var football = response.data.api;
          console.log(football);
          resolve(football);
        }, (error) => {
          reject(error)
        })
      })
    }

    var getMoney = () => {
      return new Promise((resolve, reject) => {
        $http.get("http://localhost:8000/exchange")
          .then((response) => {
            var exchange = response.data.rates;
            resolve(exchange);
          }, (error) => {
            //console.log(reason)
            reject(error)
          })
      })
    }

    var getWeather = () => {
      return new Promise((resolve, reject) => {
        $http.get("http://localhost:8000/weather?units=si")
          .then((response) => {
            var weather = response.data.currently;
            // var hour = new Date().toJSON().slice(11,19)
            // console.log( hour , "am cerut vremea")
            resolve(weather);
          }, (error) => {
            //console.log("error")
            reject(error)
          })
      })
    }

    var getTime = () => {
      var time = new Date().toTimeString();
      return time
    }

    var getDay = () => {
      var dayNumber = new Date().getDay();
      return dayNumber
    }

    return {
      getFootball: getFootball,
      getMoney: getMoney,
      getWeather: getWeather,
      getTime: getTime,
      getDay: getDay,
    }
  })