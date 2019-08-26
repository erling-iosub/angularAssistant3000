`use strict`
assistant.directive(`assistantWeatherDir`,
  (convertDataService, $interval) => {
    return {
      templateUrl: '/app/widgets/weather/assistantWeatherTemplate.html',
      link: (scope, element, attrs) => {

        var updateWeather = () => {
          convertDataService.convertWeather().then((res) => {
            scope.weather = res;
          })
        }

        //first call
        updateWeather();

        //refresh every 5 min 
        $interval( ()=>{
          updateWeather()
        },300 * 1000)
      }
    }
  }
)