// var app = angular.module('myApp',[]);
// var app = require("./controller.js");
app.directive('myDirective', function() {
  return {
    restrict: 'E',
    scope: {
      card: "=",
      imageUrl: "="
    },
    // replace: true,
    templateUrl:"../html/templates/magicCard-template.html" ,
    controller: function($scope){
      console.log($scope.card.editions[0].image_url);
      $scope.imageUrl = $scope.card.editions[0].image_url;
    }
  };
});
