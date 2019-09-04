assistant.directive(`assistantClockDir`,
  ($interval, dateFilter) => {
    return {
      controller: `assistantCtrl`,
      link: (scope, element, attrs, ctrl) => {
 
        var format;
        // timeoutId;

        function updateTime() {
          element.text(dateFilter(new Date(), format))
        }

        scope.$watch(attrs.assistantClockDir, function (value) {
          format = value;
          updateTime();
        });


        element.on('$destroy', function () {
          $interval.cancel(timeoutId);
        });

        $interval(function () {
          updateTime()
          // update DOM
        }, 1000)

      }
    }
  }
)
