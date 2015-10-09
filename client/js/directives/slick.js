app.directive('hover',function() {
  return {
    // t  emplate:' <h1>hello world</h1>',
    scope: false,
    link : function(scope, element, attrs) {
      $('.myDivTest').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      });
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
  // <script type="text/javascript">
  //     $(document).ready(function(){
  //       $('div').slick(
  //       );
  //     });
  //   </script>
  //   <div class="myDivTest">
  //     <div class="">
  //      one
  //     </div>
  //     <div class="">
  //      two
  //     </div>
  //     <div class="">
  //      three
  //     </div>
  //   </div>
});
