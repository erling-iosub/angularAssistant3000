```html
<div ng-click="someMethod()">

</div>

```


```javascript

$scope.someMethod = () => {
  $scope.someFlag = !$scope.someFlag;
  broadcastMethod();
}

  var broadcastMethod = () => {
    $rootScope.$broadcast("eventName", {
      someFlag: $scope.someFlag,
      anotherFlag: $scope.anotherFlag
      oneFlag: !$scope.someFlag
    })
  }

  //OR 

  this.someFunction = (args) => {
    $rootScope.$broadcast(`anotherEventName`,
      { flag: flag }
    )
  }


//Listen

$scope.$on(`eventName`,
(evt, data) => {
  $scope.someFlag = data.key;
  doSomething($scope.someFlag)
  
})


```