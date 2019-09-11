'use strict'

class assistantCtrl{
  constructor($scope, $interval, convertDataService, storeDataService){

    this.$scope = $scope;
    this.$interval = $interval;
    this.convertDataService = convertDataService;
    this.storeDataService = storeDataService;

    this.weather = this.storeDataService.readWeatherData('weather')
    this.money = this.storeDataService.readMoneyData('money')
    this.lastUpdate = this.storeDataService.readTimer('lastUpdate');

    this.formatClock = 'hh:mm,'
    this.formatDate = 'dd MMM'
    // this.formatDate = 'M/d/yy h:mm:ss a'

    this.callWeatherApi()
    this.callMoneyApi()
  }

  callWeatherApi() {
    var currentTime = new Date().getTime();

    if (this.weather === undefined || currentTime - this.lastUpdate > (5*60*1000) ){
      this.convertDataService.convertWeather().then(res => {
        this.lastUpdate = currentTime;
        this.weather = res;
        this.storeDataService.writeWeatherData('weather',  this.weather);
        this.storeDataService.setTimer('lastUpdate', this.lastUpdate)
        //console.log('this.weather API',this.weather)
        this.$scope.$apply()
        return this.weather ; 
      })  
    } else {
      //console.log('this.weather StoreData',this.weather)
      return this.weather = this.storeDataService.readWeatherData('weather')
    }
  }

  callMoneyApi() {
    var currentTime = new Date().getTime()
    if (this.money === undefined || currentTime-this.lastUpdate>(5*60*1000)) {
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
    // console.log('money', this.money)
    // console.log('lastUpdate', this.lastUpdate)
    // console.log('if statement', this.money === undefined)
  }

  test2(){
    // console.log('call money api')
    this.callMoneyApi() 
  }

  test3(){
    // console.log(this.something)
    this.something = !this.something
    }
}

assistantCtrl.$inject = ['$scope', '$interval', 'convertDataService', 'storeDataService'] 
angular.module('assistant').controller('assistantCtrl', assistantCtrl)



// assistant.controller(`assistantCtrl`,
//   function assistantCtrl($scope, getDataService,  $interval) {
    // convertDataService.convertMoney().then((res) => {
    //   $scope.money = res; // eur usd gbp already converted from the service
    //   //$scope.$apply();
    // }, (err) => {
    //   console.log(err)
    // })
    // convertDataService.convertWeather().then((res)=>{
    //   $scope.weather = res;
    //   $scope.$apply();
    // },(err)=>{
    //   console.log(err)
    // })
    // getDataService.getMoney().then( (resolve) => {
    //   $scope.money = resolve;
    //   $scope.$apply();
    //   return $scope.money;
    // }, (error)=>{
    //   reject(error)
    // })
    // getDataService.getWeather().then( (resolve) => {
    //   $scope.weather = resolve;
    //   $scope.weatherTime = (Date($scope.weather.timetime).split(" ")[4]).split(":")[0] + ":" +
    //     (Date($scope.weather.timetime).split(" ")[4]).split(":")[1]
    //   $scope.$apply();
    // }, (error)=>{
    //   reject(error)
    // })
  // })