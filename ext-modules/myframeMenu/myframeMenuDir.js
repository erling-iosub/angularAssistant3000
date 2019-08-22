myframeMenu.directive(`myframeMenuDir`,
  ($timeout) => {
    return {
      restrict: `E`,
      transclude: true,
      templateUrl: `/ext-modules/myframeMenu/myframeMenuTemplate.html`,
      scope: {

      },
      link: (scope, el, attr) => {
        
        $timeout(() => {
          var item = el.find('.myframe-selectable-item:first')
          item.trigger('click');
          console.log(`click`)
        })
      },
      controller: "myframeMenuCtrl"
    }
  })