// Define your controller and the objects you need to reference.
myAngularApp.controller('appController', function ($scope) {
  $scope.video = [
    title = 'Dose: Motocross riders Doug Parsons and Kris Foster build awesome SoCal jumps',
    source = {
      name: 'Network A',
      id: 1,
      video_count: 661,
      photo_id: 1
    },
    actions = {
      1: {
        name: 'Catt Small',
        id: 1
      },
      2: {
        name: 'Bob Dole',
        id: 2
      },
      3: {
        name: 'Johnny B',
        id: 3
      }
    },
    description = 'Is this video FTW? Rank it. A recent spring rainstorm in Southern California created perfect freestyle motocross conditions in Reche Canyon, just east of Los Angeles. Legendary motocross freerider Doug Parsons and Canadian pro motocross freerider Kris Foster were on it. For the latest episode of Dose, Parsons and Foster packed up their shovels, headed for the hills, and got back to the roots of freestyle motocross. What do you think of this episode of Dose? Tell us in the Comments.'
  ]
});