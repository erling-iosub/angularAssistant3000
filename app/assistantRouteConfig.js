`use strict`

assistant.config ([`$routeProvider`, ($routeProvider)=>{
  
  var routes = [
    {
      url:'/home',
      config: {
        template:"<assistant-home-dir></assistant-home-dir>"
      }
    },
    {
      url:'/dashboard',
      config: {
        template:"<assistant-dashboard-dir></assistant-dashboard-dir>"
      }
    },
    {
      url:'/weather',
      config: {
        template:"<assistant-weather-dir></assistant-weather-dir>"
      }
    },
    {
      url:'/news',
      config: {
        templateUrl:"/app/templates/newsTemplate.html"
      }
    },
    {
      url:'/exchange',
      config: {
        template:"<assistant-exchange-dir></assistant-exchange-dir>"
      }
    },
    {
      url:'/somevalues/value1',
      config: {
        template:"<assistant-somevalues1-dir></assistant-somevalues1-dir>"
      }
    },
    {
      url:'/somevalues/value2',
      config: {
        template:"<assistant-somevalues2-dir></assistant-somevalues2-dir>"
      }
    },
    
  ]

  routes.forEach( (route) => {
    $routeProvider.when(route.url, route.config);
    $routeProvider.otherwise('/dashboard', "<assistant-dashboard-dir></assistant-dashboard-dir>")
  });

  
}])