myframeMenu.directive(`myframeMenuDir`,
  () => {
    return {
      restrict: `E`,
      transclude: true,
      templateUrl:`/ext-modules/myframeMenu/myframeMenuTemplate.html`,
      scope: {
        
      },
      link: function (scope,element,attr) {

      },
      controller:"myframeMenuCtrl"
    }
  })