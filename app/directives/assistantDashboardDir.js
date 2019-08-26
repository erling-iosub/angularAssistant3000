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
          outerMargin: false,
          pushing: true,
          floating: true, 
          swapping: false,
        },

        scope.widgets = [
          {
            title: "widget 1",
            sizeX: 4,
            sizeY: 4,
            row: 0,
            col: 0,
            template: `<assistant-weather-dir></assistant-weather-dir>`,
            widgetSettings:{
            }
          },
          {
            title: "widget 2",
            sizeX: 4,
            sizeY: 4,
            row: 0,
            col: 5,
            template: `<assistant-exchange-dir></assistant-exchange-dir>`,
            widgetSettings:{
            }
          }
        ];
      }
    }
  })