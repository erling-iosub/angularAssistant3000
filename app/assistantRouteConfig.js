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
    }
  ]

  routes.forEach( (route) => {
    $routeProvider.when(route.url, route.config);
    console.log("Route Url: ", route.url)
    console.log("Route Config: ", route.config)
  });
    

}])