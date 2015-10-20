app.directive("myModal", function( $uibModal, $log){

  return {
    restrict: 'A',
    scope: false,
    controller: function ($scope, $uibModal, $log ) {

      $scope.animationsEnabled = true;

      $scope.open = function (card) {
        var modalInstance = $uibModal.open({
          $scope: false,
          animation: $scope.animationsEnabled,
          templateUrl: 'html/templates/magicModal-template.html',
          controller: 'ModalInstanceCtrl',
          resolve: {
            items: function () {
              return card;
              // return $scope.items;
            }
          }
        });
        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };
    }
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It us not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
  $scope.items = items;
  $scope.myCards = [];

  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.fn = function(card){
    console.log(card);
    $scope.myCards.push(card);
  } ;
  $scope.ok = function () {
    console.log($scope.myCards);
    $modalInstance.close();
  };

  $scope.cancel = function () {

    $modalInstance.dismiss('cancel');
  };
});
