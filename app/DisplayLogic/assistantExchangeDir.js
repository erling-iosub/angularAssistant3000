assistant.directive ( 'assistantExchangeDir',
  (convertDataService, $interval) => {
    return {
      controller: `displayCtrl`,
      link: (scope, element, attrs, ctrl) => {




          // var updateMoney = () => {
          //   convertDataService.convertMoney().then((res) => {
          //     if (res !== scope.money) {
          //       scope.money = res; // eur usd gbp already converted from the service
          //       scope.$apply()
          //       }
          //     }
          //   )
          // }


          // $interval( () => {
          //   console.log("refresh")
          //   updateMoney()
          // }, 12000)
        }
      }
    }
)