app.directive('sideBar', function() {
  return {
    restrict: 'E',
    scope: true,
    replace: true,
    templateUrl:"../html/templates/sideBar-template.html" ,
    link: function($scope, element, attrs){
      $scope.btnFunction = function(set){
       $scope.getCards(set.cards_url);
       $scope.setSetName(set.name);
       $filter = "findSet";
      };
    }
  };
});
