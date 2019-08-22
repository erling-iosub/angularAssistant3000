assistant.controller(`assistantCtrl`,
  function assistantCtrl($scope, getDataService, convertDataService) {

    $scope.clock = convertDataService.getTime();
    $scope.day = convertDataService.getDay();

    convertDataService.convertMoney().then((res) => {
      $scope.money = res;
      $scope.$apply();
      console.log("aici",$scope.money)
    },(err)=>{
      console.log(err)
    })

    

    // convertDataService.convertWeather().then((res)=>{
    //   $scope.weather = res;
    //   $scope.counter++;
    //   $scope.$apply();
    //   console.log($scope.weather)
    //   console.log("Counter: ",$scope.counter)
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