<html>
  
</html>


$scope.$on(`myframe-menu-item-selected-event`,
(evt, data) => {
  $scope.routeString = data.route;
  //
  $location.path(data.route);
  checkWidth();
  broadcastMenuState();
})

$scope.$on(`myframe-menu-toggle-orientation`,
(evt, data) => {
  $scope.isMenuVertical = data.isMenuVertical;
})
// after the digest cicle call the checkWidth function 
// to set the proper boolean value for isMenuButtonVisible
$timeout(() => {
checkWidth();
}, 0)
})


var broadcastMenuState = () => {
  $rootScope.$broadcast("myframeMenu-show", {
    show: $scope.isMenuVisible,
    isVertical: $scope.isMenuVertical,
    allowHorizontalToggle: !$scope.isMenuButtonVisible
  })
}