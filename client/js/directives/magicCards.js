// var app = require("./controller.js");
app.directive('magicCard', function() {
  return {
    restrict: 'E',
    scope: true,
    replace: true,
    templateUrl:"../html/templates/magicCards-template.html" ,
    link: function($scope,element,attrs){
      // console.log(scope.card);
    }
  };
});
