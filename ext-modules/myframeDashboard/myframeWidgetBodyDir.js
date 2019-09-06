myframeDashboard.directive(`myframeWidgetBodyDir`,
  ['$compile','$uibModal', 
    ($compile, $uibModal) => {
    return {
      templateUrl: `/ext-modules/myframeDashboard/myframeWidgetBodyTemplate.html`,
      link: (scope, element, attrs) => {
        // item is the iterator in ng-repeat from myframeDashboardTemplate.html
        // template is pointing to the widget weather directive 
        // in order to complile scope.item.template I need to create a new var
        var newElement = angular.element(scope.item.template);

        // append the newElement to the element from link fn. 
        element.append(newElement)
        
        // this fn is looking for a scope. so we pass the current scope
        $compile(newElement)(scope);


        scope.close = () => {
          scope.widgets.splice(scope.widgets.indexOf(scope.item), 1) // deletes a widget
        }

        scope.settings = () => {
          var options = {
            templateUrl: scope.item.widgetSettings.templateUrl,
            controller: scope.item.widgetSettings.controller,
            scope: scope
          }

          // ui bootstrap directive
          $uibModal.open(options)

        }

      }
    }
  }])