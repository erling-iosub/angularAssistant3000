myframeMenu.directive(`myframeDashboardDir`,
  () => {
    return {
      restrict: `E`,
      transclude: true,
      templateUrl:`/ext-modules/myframeDashboard/myframeDashboardTemplate.html`,
      link: function (scope,element,attr) {
      },
    }
  })