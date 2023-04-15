var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
    $scope.black = "stroke:rgb(0, 0,0);stroke-width:2";
    $scope.blue = "stroke:rgb(0, 0,255);stroke-width:10";
    $scope.points = {
        "stange_x": 50,
        "stange_y": 125,
        "winkel": 45
    };
    $scope.points2 = {
        "aussen_x": 50,
        "aussen_y": 125
    };

    function getCircleY(radians, radius) {
      return Math.sin(radians) * radius;
    }
    function getCircleX(radians, radius) {
      return Math.cos(radians) * radius;
    }

    function update_points2() {
        $scope.points2 = {
            "aussen_x": $scope.points.stange_x + getCircleX($scope.points.winkel / 180 * Math.PI, $scope.points.stange_y),
            "aussen_y": $scope.points.stange_y - getCircleY($scope.points.winkel / 180 * Math.PI, $scope.points.stange_y)
        };
        console.log('hey, my Var has changed!', typeof $scope.points.stange_x);
    }

    $scope.$watch('points', update_points2, true);
    update_points2();
});
