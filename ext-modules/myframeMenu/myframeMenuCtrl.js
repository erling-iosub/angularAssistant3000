myframeMenu.controller(`myframeMenuCtrl`,
  function myframeMenuCtrl($scope, $rootScope, $timeout, $window) {

    // flags used to display the left side menu
    $scope.showMenu = true; // show
    $scope.isVertical = true; // toggle vertical / horizontal

    this.getActiveElement = () => {
      return $scope.activeElement
    };

    this.setActiveElement = (element) => {
      $scope.activeElement = element
      //console.log($scope.activeElement)
    };

    // use $broadcast to avoid depending on a particular routing system
    this.setRoute = (route) => {
      $rootScope.$broadcast(`myframe-menu-item-selected-event`,
        { route: route }
      )
      console.log("route ", route)
    }

    $scope.toggleMenuOrientation = () => {
      $scope.isVertical = !$scope.isVertical;
      console.log("$scope.isVertical: ",$scope.isVertical)
      $rootScope.$broadcast("myframe-menu-toggle-orientation", 
      {isMenuVertical: $scope.isVertical})
    }

    this.isVertical = () => {
      return $scope.isVertical;
    }

    // listen to the data broadcast by myFrameWorkCtrl to know if the menu is 
    // visible or not
    $scope.$on(`myframeMenu-show`, (event,data) => {
      $scope.showMenu = data.show
      //console.log("Show Menu myframeMenu ", $scope.showMenu)
    })


  });