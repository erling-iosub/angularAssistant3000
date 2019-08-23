assistant.controller(`displayCtrl`,
    ($scope,$interval, convertDataService) => {

      //setMoney
      $scope.money = (() => {
        convertDataService.convertMoney().then((res) => {
          return res;
        })})()

        console.log($scope.money)

      $scope.formatClock = 'HH:mm,'
      $scope.formatDate = 'dd MMM'
      
    })
      

