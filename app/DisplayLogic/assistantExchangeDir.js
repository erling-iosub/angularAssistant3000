assistant.directive ( 'assistantExchangeDir',
  (convertDataService, $interval) => {
    return {
      controller: `displayCtrl`,
      link: (scope, element, attrs, ctrl) => {


          var updateMoney = () => {
            convertDataService.convertMoney().then((res) => {
              if (res !== scope.money) {
                scope.money = res; // eur usd gbp already converted from the service
                scope.$apply()
                }
              }
            )
          }

          updateMoney()
          
          $interval( () => {
            updateMoney()
          }, 12000)
        }
      }
    }
)