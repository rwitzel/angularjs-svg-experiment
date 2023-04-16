var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
    $scope.points = {
        "stange_x": 50,
        "stange_y": 125,
        "winkel": 45,
        "winkelsonne": 45
    };
    function update_points2() {
        console.log('ho, my Var has changed!', typeof $scope.points.stange_x, typeof $scope.points.stange_y);
    }

    $scope.$watch('points', update_points2, true);
    update_points2();
});
