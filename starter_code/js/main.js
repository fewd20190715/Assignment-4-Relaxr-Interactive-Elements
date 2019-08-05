

$( document ).ready(function() {
    console.log( "document loaded" );

    $("#bottom-cta").click(function(event){
      event.preventDefault();
      console.log("click prevented");
    });

    $(".readmore").on('click', function() {
      $("p").slideDown();
      $("p").show()
      $(".readmore").hide()
      console.log("read more clicked");
      });

      $(".readless").on('click', function() {
        $(".hide").slideUp();
        $(".readmore").show()
        $(".readless").hide()
        console.log("read less clicked");
        });

      $(".learnmore").on('click', function(){
      $(".learnmore").hide()
      $("span").slideDown();
      console.log("learn more clicked")
      });
});




  //
