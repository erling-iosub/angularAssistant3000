assistant.directive(`assistantClockDir`,
  ($interval, dateFilter) => {
    return {
      controller: `assistantCtrl`,
      link: (scope, element, attrs, ctrl) => {
 
        console.log(ctrl.formatClock);
        console.log(ctrl.formatDate)

        function updateClock(){
          element.text(dateFilter(new Date(), 'HH:mm'));
        }

        // function updateDate(){
        //   element.text(dateFilter(new Date(), ctrl.dateFormat));
        // }

        $interval(function () {
        // update DOM
        updateClock()
        // updateDate()
        }, 1000)

      }
    }
  }
)
