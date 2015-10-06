app.controller("myController", function($scope, $timeout, httpFactory){
  $scope.hello = "hellow world";
  $scope.names= ["brandon","yusef","dom"];

  getCards= function(url){
    httpFactory.get(url)
    .then(function(response){
      // console.log(response.data);
      $scope.cards= response.data;
    });
  };
  getCards("https://api.deckbrew.com/mtg/cards?set=BFZ");



});

// module.exports = app;
