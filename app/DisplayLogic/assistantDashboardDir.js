assistant.directive('assistantDashboardDir',
  () => {
    return {
      controller: `assistantCtrl`,
      scope:{

      },
      template:"<myframe-dashboard-dir> </myframe-dashboard-dir>",
      link: (scope) => {
        scope.widgets = [
          {
            sizeX: 3,
            sizeY: 3,
            row: 0,
            col: 0,
          },
          {
            sizeX: 2,
            sizeY: 2,
            row: 0,
            col: 5,
          },
        ];
      }
    }
  })