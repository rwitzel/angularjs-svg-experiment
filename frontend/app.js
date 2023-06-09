var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
    $scope.black = "stroke:rgb(0, 0,0);stroke-width:4";
    $scope.black_thin = "stroke:rgb(0, 0,0);stroke-width:2";
    $scope.blue = "stroke:rgb(0, 0,255);stroke-width:10";
    $scope.green = "stroke:green;stroke-width:4";
    $scope.orange = "stroke:orange;stroke-width:4";
    $scope.red = "stroke:red;stroke-width:20";
    $scope.points = {
        "stange_x": 50,
        "stange_y": 125,
        "winkel": 45,
        "winkelsonne": 45
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
        console.log('hey, my Var has changed!', typeof $scope.points.stange_x, typeof $scope.points.stange_y);
    }

    $scope.$watch('points', update_points2, true);
    update_points2();
});
