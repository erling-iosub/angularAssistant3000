myframeDashboard.directive(`myframeDashboardDir`,
  () => {
    return {
      templateUrl:`/ext-modules/myframeDashboard/myframeDashboardTemplate.html`,
      link: (scope, element, attrs, ctrl)=>{
        scope.addNewWidget = (widget) => {
          var newWidget = angular.copy(widget.settings); // make a copy of the obj
          scope.widgets.push(newWidget)
        }
      }
    }
  })