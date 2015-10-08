app.directive('popover', function () {
  return {
    restrict: 'A',
    scope: true,
    // template: '<span>{{label}}</span>',
    link: function ($scope, element, attrs) {
      $scope.label = attrs.popoverLabel;
      // console.log(scope.card);
      $(element).popover({
        trigger: 'hover',
        html: true,
        content:"<ul><li>name: "+$scope.card.name+"</li><li>Text:"+$scope.card.text+"</li><li>Color: " + $scope.card.colors+"</li><li>mana cost: "+$scope.card.cmc+"</li></ul>",
        placement: "right",
      });
    }
  };
});
