assistant.directive('assistantWeatherDir',
  () => {
    return {
      controller: `assistantCtrl`,
      scope:{

      },
      templateUrl:"/app/templates/weatherTemplate.html"
    }
  })