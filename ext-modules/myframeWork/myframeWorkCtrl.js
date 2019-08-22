`use strict`
myframeWork.controller(`myframeWorkCtrl`,
  function ($scope, $window, $timeout, $rootScope) {


    $scope.isMenuVisible = true;
    $scope.isMenuButtonVisible = true;
    $scope.isMenuVertical = true;


    $scope.menuButtonClicked = () => {
      $scope.isMenuVisible = !$scope.isMenuVisible;
      // need to pass this value to its child (myframeWorkCtrl)
      broadcastMenuState();
<<<<<<< HEAD
      //console.log("isMenuVisible", $scope.isMenuVisible)
=======
>>>>>>> master
      //$scope.$apply();
    }

    var broadcastMenuState = () => {
      $rootScope.$broadcast("myframeMenu-show", {
        show: $scope.isMenuVisible,
<<<<<<< HEAD
        isVertical: $scope.isMenuVertical
=======
        isVertical: $scope.isMenuVertical,
        allowHorizontalToggle: !$scope.isMenuButtonVisible
>>>>>>> master
      })
    }


    // myframework is a namespace used later on to destroy the menu button
    $($window).on('resize.myframework', () => {
      $scope.$apply( () => {
        checkWidth();
        broadcastMenuState();
      })
    })

    // let off the resize event after the checkWidth function is called and 
    // the var s are set
    $($window).on("destroy", () => {
      $($window).off("resize.myframework")
    })

    var checkWidth = () => {
      var width = Math.max($($window).width(), $window.innerWidth)
      $scope.isMenuVisible = (width >= 768);
      $scope.isMenuButtonVisible = !$scope.isMenuVisible;
    }


    $scope.$on(`myframe-menu-item-selected-event`,
      (evt, data) => {
        $scope.routeString = data.route;
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