assistant.factory(`convertDataService`,
  (getDataService) => {

    var convertFootball = function(){
      return getDataService.getFootball().then((response)=>{
        return response        
      })
    }

    var convertMoney = function (){
        return getDataService.getMoney().then((response) => {
          return {
            Eur: response.RON,
            Usd: response.RON / response.USD,
            Gbp: response.RON / response.GBP
          };
        });
      }

    var convertWeather = function(){
        return getDataService.getWeather().then( (response) => {
          return {
            Location: "Bucharest",
            Time: (Date(response.time).split(" ")[4]).split(":")[0] + ":" + (Date(response.time).split(" ")[4]).split(":")[1],
            Temperature: response.temperature,
            Humidity: response.humidity,
            UvIndex: response.uvIndex,
            WindSpeed: response.windSpeed,
            ChanceOfPrecipitation: response.precipProbability
          };
        });
      }
      
    var convertTime = function(){
        return getDataService.getTime().split(":")[0] + ":" + getDataService.getTime().split(":")[1];
      }
    
    var convertDay = function(){
        switch (getDataService.getDay()) {
          case 1:
            day = "Monday";
            break;
          case 2:
            day = "Tuesday";
            break;
          case 3:
            day = "Wednesday";
            break;
          case 4:
            day = "Thursday";
            break;
          case 5:
            day = "Friday";
            break;
          case 6:
            day = "Saturday";
            break;
          case 0:
            day = "Sunday";
            break;
        }
        return day;
      }
      
      return {
        convertFootball:convertFootball,
        convertMoney: convertMoney,
        convertWeather: convertWeather,
        getTime: convertTime,
        getDay: convertDay,
      }
  })


