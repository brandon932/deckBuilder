app.controller("myController", function($scope, $timeout, httpFactory){

  $scope.getCards= function(url){
    httpFactory.get(url)
    .then(function(response){
      $scope.cards= response.data;
    });
  };

  //
  $scope.getSets = function(url){
    httpFactory.get(url)
    .then(function(response){
      $scope.sets = response.data;
      // console.log($scope.sets);
    });
  };

  $scope.setSetName = function(name){
    $scope.setName = name;
  };

  $scope.getCards("https://api.deckbrew.com/mtg/cards?set=BFZ");
  $scope.getSets('https://api.deckbrew.com/mtg/sets');
  $scope.setName = "Battle for Zendikar";
  // console.log($scope.setName);

  $scope.fn = function(card){
    console.log(card);
  } ;


});

// module.exports = app;
