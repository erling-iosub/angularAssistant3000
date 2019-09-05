assistant.factory('storeDataService',
  
  function(){

    var weatherData = {};
    var moneyData = {};
    var timerData = {}

    var readWeatherData = (key) => {
      return weatherData[key];
    }

    var writeWeatherData = (key, value) => {
      weatherData[key] = value;
      return value;
    }

    var readMoneyData = (key) => {
      return moneyData[key];
    }

    var writeMoneyData = (key, value) => {
      moneyData[key] = value;
      return value;
    }

    var setTimer = (key,value) => {
      timerData[key] = value;
      return value;
    }

    var readTimer = (key) => {
      return timerData[key]
    }

    return {
      readWeatherData: readWeatherData,
      writeWeatherData: writeWeatherData,

      readMoneyData: readMoneyData,
      writeMoneyData: writeMoneyData,

      setTimer: setTimer,
      readTimer: readTimer,
    }
  })

      // return {
    //   get: function (key) {
    //     return data[key];
    //   },
    //   set: function (key, value) {
    //     data[key] = value;
    //     return value;
    //   }
    // }