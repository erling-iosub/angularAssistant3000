`use strict`

assistant.config ([`$routeProvider`, ($routeProvider)=>{
  
  var routes = [
    {
      url:'/home',
      config: {
        template:'<assistant-home-dir></assistant-home-dir>'
      }
    },
    {
      url:'/weather',
      config: {
        template:'<assistant-weather-dir></assistant-weather-dir>'
      }
    },
    {
      url:'/exchange',
      config: {
        template:'<assistant-exchange-dir></assistant-exchange-dir>'
      }
    },
    {
      url:'/somevalues/value1',
      config: {
        template:'<assistant-somevalues-dir></assistant-somevalues-dir>'
      }
    },
    {
      url:'/somevalues/value2',
      config: {
        template:'<assistant-somevalues-dir></assistant-somevalues-dir>'
      }
    },
    {
      url:'/somevalues/value3',
      config: {
        template:'<assistant-somevalues-dir></assistant-somevalues-dir>'
      }
    },
  ]

  routes.forEach( (route) => {
    $routeProvider.when(route.url, route.config);
  });
    

}])