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
        content:"<h3>"+$scope.card.name + "</h3><ul><li>Color: " + $scope.card.colors +"</li><li>Type: " + $scope.card.types+"-" + $scope.card.subtypes + "</li><li>strength: " + $scope.card.power+"/"+ $scope.card.toughness+"</li><li>mana cost: "+$scope.card.cmc+" | "+$scope.card.cost+"</li><li>Text:"+$scope.card.text+"</li></ul>",
        placement: "right",
      });
    }
  };

//
// '<div class="myDivTest">
//         <div >
//           <img src="https://image.deckbrew.com/mtg/multiverseid/401805.jpg" alt="" />
//          two
//         </div>
//         <div class="">
//           <img src="https://image.deckbrew.com/mtg/multiverseid/401807.jpg" alt="" />
//          three
//         </div>
//       </div> '
});
