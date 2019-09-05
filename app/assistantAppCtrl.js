assistant.controller(`assistantCtrl`,
  function assistantCtrl($scope, getDataService, convertDataService, $interval) {

    $scope.clock = convertDataService.getTime();
    $scope.day = convertDataService.getDay();

    $scope.formatClock = 'HH:mm,'
    $scope.formatDate = 'dd MMM'


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
  })