assistant.factory(`convertDataService`,
  (getDataService) => {
    return {
      convertMoney: function (){
        return getDataService.getMoney().then((res) => {
          return {
            Eur: res.RON,
            Usd: res.RON / res.USD,
            Gbp: res.RON / res.GBP
          };
        });
      },

      convertWeather: function(){
        return getDataService.getWeather().then( (res) => {
          return {
            Time: (Date(res.time).split(" ")[4]).split(":")[0] + ":" + (Date(res.time).split(" ")[4]).split(":")[1],
            Temperature: res.temperature,
            Humidity: res.humidity,
            UvIndex: res.uvIndex,
            WindSpeed: res.windSpeed,
            ChanceOfPrecipitation: res.precipProbability
          };
        });
      },
      getTime: function(){
        return getDataService.getTime().split(":")[0] + ":" + getDataService.getTime().split(":")[1];
      },
      getDay: function(){
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
    }
  })


