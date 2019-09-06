  

  'use strict'
  class displayCtrl {
    constructor (convertDataService, $interval, $scope, storeDataService) {
      this.$interval = $interval;
      this.$scope = $scope;
      this.convertDataService = convertDataService;
      this.storeDataService = storeDataService;

      this.weather = this.storeDataService.readWeatherData('weather')
      this.money = this.storeDataService.readMoneyData('money')
      this.lastUpdate = this.storeDataService.readTimer('lastUpdate');

      this.callWeatherApi()
      this.callMoneyApi()
    }
    
    callWeatherApi() {
      var currentTime = new Date().getTime();
      if (this.weather === undefined || currentTime - this.lastUpdate > (2*60*1000) ){
        this.convertDataService.convertWeather().then(res => {
          this.lastUpdate = currentTime;
          this.weather = res;
          this.storeDataService.writeWeatherData('weather',  this.weather);
          this.storeDataService.setTimer('lastUpdate', this.lastUpdate)
          return this.weather ; 
        })  
      } else {
        return this.weather = this.storeDataService.readWeatherData('weather')
      }
    }

    callMoneyApi() {
      var currentTime = new Date().getTime()
      if (this.money === undefined || currentTime-this.lastUpdate>(2*60*1000)) {
        this.convertDataService.convertMoney().then(res =>{
          this.lastUpdate = currentTime;
          this.money = res;
          this.storeDataService.writeMoneyData('money', this.money)  
          return this.money; 
        })
      } else {

        return this.money = this.storeDataService.readMoneyData('money')
      }
    }

    test1(){
      console.log('money', this.money)
      console.log('lastUpdate', this.lastUpdate)
      console.log('if statement', this.money === undefined)
    }

    test2(){
      console.log('call money api')
      this.callMoneyApi() 
    }

    test3(){
      console.log(this.something)
      this.something = !this.something
      }
    }
  
  displayCtrl.$inject = ['convertDataService', '$interval','$scope', 'storeDataService'];
  angular.module('assistant').controller('displayCtrl', displayCtrl)


