`use strict`
assistant.directive(`assistantWeatherDir`,
  (convertDataService, $interval) => {
    return {
      templateUrl: '/app/widgets/weather/assistantWeatherTemplate.html',
      controller: 'assistantCtrl',
      link: (scope, element, attrs, ctrl) => {
        
        $interval(()=>{
          ctrl.callWeatherApi()
        }, 10000)
      

      }
    }
  }
)