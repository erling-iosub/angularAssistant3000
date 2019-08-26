assistant.directive('assistantDashboardDir',
  () => {
    return {
      controller: `assistantCtrl`,
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

        scope.widgets = [
          {
            title: "widget 1",
            sizeX: 3,
            sizeY: 3,
            row: 0,
            col: 0,
          },
          {
            title: "widget 2",
            sizeX: 4,
            sizeY: 4,
            row: 0,
            col: 5,
          },
        ];
      }
    }
  })