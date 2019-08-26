myframeMenu.directive(`myframeDashboardDir`,
  () => {
    return {
      transclude: true,

      templateUrl:`/ext-modules/myframeDashboard/myframeDashboardTemplate.html`,
      link: function (scope,element,attr) {
      },
    }
  })