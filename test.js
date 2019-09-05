'use strict'
class newCtrl {
  constructor ($interval, $scope, convertDataService, storeDataService) {
    this.$scope = $scope;
    this.$interval = $interval;
    this.storeDataService = storeDataService;
    this.convertDataService = convertDataService;
    // this.lastUpdate = new Date().getTime();
    this.testFn()
  }

  callWeatherApi() {
    this.convertDataService.convertWeather().then(res => {
      this.weather = res; 
      return this.weather
    })
  }

  writeTest(){
    this.storeDataService.writeData('weather',  this.weather)
  }

  readTest(){
    this.storeDataService.writeData('weather',  this.weather)
  }
}

newCtrl.$inject = ['convertDataService', 'storeDataService', '$scope', '$interval'];
angular.module('assistant').controller('newCtrl', newCtrl)

      // this.weather = this.storeDataService.get('weather')
      // this.storeDataService.writeData('weather',  this.weather)