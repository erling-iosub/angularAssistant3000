assistant.directive('assistantDashboardDir',
  () => {
    return {
      scope:{

      },
      template:"<myframe-dashboard-dir> </myframe-dashboard-dir>",
      link: (scope) => {

        scope.title="Dashboard Page"
        // gridster defaults
        scope.gridsterOpts = {
          columns: 12,
          margins: [20,20],
          outerMargin: true,
          pushing: true,
          floating: false, 
          swapping: false,
        },

        // widgets templates
        scope.widgetDefinitions = [
          {
            title: 'Weather',
            settings: {
              sizeX: 4,
              sizeY: 4,
              template: `<assistant-weather-dir></assistant-weather-dir>`,
              widgetSettings:{
                id: 1000,
                templateUrl: "/app/dialogs/weatherModalTemplate.html",
                controller: 'displayCtrl'
              },
            },
          },
          {
            title: 'Money',
            settings: {
              sizeX: 4,
              sizeY: 4,
              template: `<assistant-exchange-dir></assistant-exchange-dir>`,
              widgetSettings: {
                id: 1100,
                templateUrl: "/app/dialogs/moneyModalTemplate.html",
                controller: 'displayCtrl'
              },
            },
          },
        ],

        scope.widgets = [
        ];
      }
    }
  })
