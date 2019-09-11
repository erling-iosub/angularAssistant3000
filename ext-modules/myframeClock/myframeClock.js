'use strict'

class myframeClockCtrl {
  static get $inject() { 
    return ['$scope'];
  }

  constructor($scope, $interval, dateFilter) {
    this.$scope = $scope;
    this.$interval = $interval
    this.dateFilter = dateFilter
    this.updateTime()

  }

  updateTime() {
    this.currentDate = new Date();
    this.hour = this.currentDate.getHours();
    this.minutes = this.currentDate.getMinutes();
    this.day = this.currentDate.getDate();
    this.month = this.currentDate.getMonth();
    this.monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    this.clock = this.addZero(this.hour) + ':' + this.addZero(this.minutes) + ',';
    this.dayAndMonth = this.addZero(this.day) + ' / ' + this.monthNames[this.month];
  }

  addZero(n){
      return n<10 ? '0'+n : n;
  }

}

var myframeClock = angular.module('myframeClock', [])

myframeClock.directive('myframeClockDir', ($interval)=>({
  restrict: 'E',
  //template: '<p>hello</p>',
  templateUrl:'/ext-modules/myframeClock/myframeClockTemplate.html',
  controller: myframeClockCtrl,
  controllerAs: 'ctrl',
  link: (scope, element,attrs,ctrl)=>{
    $interval(()=>{
    ctrl.updateTime()
  },1000)
  }
}));