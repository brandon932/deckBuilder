// var app = angular.module('myApp',[]);
// var app = require("./controller.js");
app.directive('magicCard', function() {
  return {
    restrict: 'E',
    scope: true,

    // {
    //   cards: "=",
    //   imageUrl: "="
    // },
    replace: true,
    templateUrl:"../html/templates/magicCards-template.html" ,
    link: function($scope,element,attrs){
      // console.log(scope.card);

    }
  };
});
