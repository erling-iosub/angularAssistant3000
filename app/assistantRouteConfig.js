`use strict`

assistant.config ([`$routeProvider`, ($routeProvider)=>{
  
  var routes = [
    {
      url:'/home',
      config: {
        templateUrl:"/templates/homeTemplate.html"
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
        templateUrl:"/templates/weatherTemplate.html"
      }
    },
    {
      url:'/exchange',
      config: {
        templateUrl:"/templates/exchangeTemplate.html"
      }
    },
    {
      url:'/somevalues/value1',
      config: {
        templateUrl:"/templates/somevaluesTemplate1.html"
      }
    },
    {
      url:'/somevalues/value2',
      config: {
        templateUrl:"/templates/somevaluesTemplate2.html"
      }
    },
    {
      url:'/somevalues/value3',
      config: {
        template:"/templates/somevaluesTemplate3.html"
      }
    },
  ]

  routes.forEach( (route) => {
    $routeProvider.when(route.url, route.config);
    $routeProvider.otherwise('/dashboard', "<assistant-dashboard-dir></assistant-dashboard-dir>")
  });

  
}])