`use strict`
assistant.directive(`assistantWeatherDir`,
  (convertDataService, $interval) => {
    return {
      templateUrl: '/app/widgets/weather/assistantWeatherTemplate.html',
      controller: 'assistantCtrl',
      link: (scope, element, attrs, ctrl) => {
        
        scope.$watch('scope.x', (newVal)=>{
          console.log("AICI", newVal)
        },true)
        
        $interval(()=>{
          ctrl.callWeatherApi()
          scope.x = ctrl.lastUpdate.toString()
          console.log(scope.x )
        }, 10000)
      

      }
    }
  }
)