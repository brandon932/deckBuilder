app.controller("myController", function($scope, $timeout, httpFactory, $uibModal, $log ){

  // $scope.loggedIn = function(){
  //     console.log(AuthService.getUserStatus());
  //     if (AuthService.getUserStatus() === true) {
  //         console.log("true");
  //         return false;
  //     }else{
  //         console.log("false");
  //         return true;
  //     }
  // };

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

  $scope.myCards = [];
  // $scope.fn = function(card){
  //   $scope.myCards.push(card);
  //   console.log($scope.myCards);
  //   console.log("hello fn");
  // } ;
  //
  $scope.showMyCards = function(){
    $scope.cards = $scope.myCards;
  };

  });
