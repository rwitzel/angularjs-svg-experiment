var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.black = "stroke:rgb(0, 0,0);stroke-width:2";
  $scope.points = {
    "stange_x": 50
  };
});
