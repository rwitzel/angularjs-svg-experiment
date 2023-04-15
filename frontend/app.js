var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.row = [
    { node: { x: 0, y : 0, name: 'test' } },
    { node: { x: 50, y : 50, name: 'foo' } }
    ];
  $scope.move = function(){
    angular.forEach($scope.row, function(value, index){
      value.node.x += Math.round((Math.random()-0.5)*20);
    });
  }
  $scope.black = "stroke:rgb(0, 0,0);stroke-width:2";
});

app.directive('', function(){

});
