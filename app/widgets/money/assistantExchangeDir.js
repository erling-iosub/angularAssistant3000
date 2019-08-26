assistant.directive('assistantExchangeDir',
  (convertDataService, $interval) => {
    return {
      templateUrl: "/app/widgets/money/assistantExchangeTemplate.html",
      link: (scope, element, attrs, ctrl) => {

        var updateMoney = () => {
          convertDataService.convertMoney().then((res) => {
            scope.money = res; // eur usd gbp already converted from the service
            scope.$apply()
          })
        }

        //first call
        updateMoney()

        //refresh every 5 min 
        $interval(() => {
          updateMoney()
        }, 300 * 1000)
      }
    }
  }
)