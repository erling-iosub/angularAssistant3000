'use strict'
class moneyModalCtrl {
  constructor ($scope, storeDataService) {
    this.$scope = $scope;
    this.storeDataService = storeDataService;
    this.isLoaded = true;
    this.moneyOptions = storeDataService.readMoneyData('money');
  }
}

moneyModalCtrl.$inject = ['$scope','storeDataService'];
angular.module('assistant').controller('moneyModalCtrl', moneyModalCtrl)