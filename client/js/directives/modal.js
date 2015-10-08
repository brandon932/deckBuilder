app.directive('hover',function() {
  return {
    // template:' <h1>hello world</h1>',
    scope: false,
    link : function(scope, element, attrs) {
      element.bind('mouseenter', function() {
        // scope.fn();
        // console.log(scope.card);
      });
      element.bind('mouseleave', function() {
        // alert("you have left");
        // element.parent().hide();
      });

    }
  };
});
