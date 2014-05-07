// Define your controller and the objects you need to reference.
myAngularApp.controller('appController', function ($scope) {
  $scope.video = {
    title: 'Dose: Motocross riders Doug Parsons and Kris Foster build awesome SoCal jumps',
    description: 'Is this video FTW? Rank it. A recent spring rainstorm in Southern California created perfect freestyle motocross conditions in Reche Canyon, just east of Los Angeles. Legendary motocross freerider Doug Parsons and Canadian pro motocross freerider Kris Foster were on it. For the latest episode of Dose, Parsons and Foster packed up their shovels, headed for the hills, and got back to the roots of freestyle motocross. What do you think of this episode of Dose? Tell us in the Comments.',
    views_count: 130,
    source: {
      name: 'Network A',
      id: 1,
      videos_count: 661,
      photo_id: 1
    },
    actions: {
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
    }
  }
});

myAngularApp.controller('relatedContentController', function ($scope) {
  $scope.showAllStreams = false;
  
  $scope.toggleStreamVisibility = function(){
    if (!$scope.showAllStreams) {
      $scope.showAllStreams = true;
    } else {
      $scope.showAllStreams = false;
    }
  }
  
  $scope.myInterval = 5000;
  $scope.relatedContent = {
    1: {
      name: 'dose',
      videos_count:6,
      slides: {
        1: {
          videos: {
            1: {
              id: 1,
              title: 'Dose: Investigating inversion smog problems in Salt Lake City on Earth Day'
            },
            2: {
              id: 2,
              title: 'Dose: Monster Energy Supercross hits New York City for first time in 20 years'
            },
            3: {
              id: 3,
              title: 'Dose: Investigating the environmental & health risks of polluted urban water runoff'
            },
            4: {
              id: 4,
              title: 'Dose: The best party at Coachella wasn\'t actually at Coachella'
            },
            5: {
              id: 5,
              title: 'Dose: Waves For Water puts traveling surfers to work by supplying clean drinking water'
            }
          }
        },
        2: {
          videos: {
            1: {
              id: 1,
              title: 'Dose: Investigating inversion smog problems in Salt Lake City on Earth Day'
            }
          }
        }
      }
    },
    2: {
      name: 'Moto',
      videos_count:1,
      slides: {
        1: {
          videos: {
            1: {
              id: 1,
              title: 'Watch the trailer for Deus Ex Machina\'s "I Had Too Much To Dream Last Night"'
            },
            2: {
              id: 2,
              title: 'The trailer for Twitch\'s new FMX video "Chasing The Storm" will get you amped'
            }
          }
        }
      }
    },
    3: {
      name: 'Kris Foster',
      videos_count:1,
      slides: {
        1: {
          videos: {
            1: {
              id: 1,
              title: 'You know you want to watch female motocross rider Tarah Geiger in slow motion'
            }
          }
        }
      }
    }
  }
});