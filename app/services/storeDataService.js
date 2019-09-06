assistant.factory('storeDataService',
  
  function(){

    var coordinates;
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

    var getCoordinates = (city)=>{
      switch(city){
        case'Bucuresti':
          coordinates = '44.4268,26.1025'
          break
        
        case'Brasov':
          coordinates = '45.6580,25.6012'
          break
        
        case'Cluj':
          coordinates = '46.7712,23.6236'
          break
        
        case'Constanta':
          coordinates = '44.1598,28.6348'
          break
        }
        return coordinates
      }
    

    return {
      readWeatherData: readWeatherData,
      writeWeatherData: writeWeatherData,

      readMoneyData: readMoneyData,
      writeMoneyData: writeMoneyData,

      setTimer: setTimer,
      readTimer: readTimer,
      getCoordinates:getCoordinates,
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