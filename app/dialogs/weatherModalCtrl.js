'use strict'
class weatherModalCtrl {
  constructor ($scope, storeDataService) {
    this.$scope = $scope;
    this.storeDataService = storeDataService;
    this.isLoaded = true;
    this.weather = storeDataService.readWeatherData('weather');
  }
}

weatherModalCtrl.$inject = ['$scope','storeDataService'];
angular.module('assistant').controller('weatherModalCtrl', weatherModalCtrl)
