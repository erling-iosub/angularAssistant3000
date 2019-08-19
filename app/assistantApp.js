`use strict`
const assistant = angular.module(`assistant`, [`myframeWork`, `ngRoute`])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: '/app/templates/homeTemplate.html',
      controller: 'assistantCtrl'
    });
  }])