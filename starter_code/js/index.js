$( document ).ready(function() {
    
$(".readless-hide").hide();

$("a").click(function (event) {
  event.preventDefault();
  $("<div>")
  .append("default" + event.type + "prevented")
  .appendTo("#log");
})
 
  $(".readmore").click(onReadMore);

    function onReadMore() {
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless-hide').show();
      
    };

  $(".readless-hide").click(onReadLess);

    function onReadLess() {
    $("#show-this-on-click").slideUp();
    $('.readmore').show();
    $('.readless-hide').hide();
    
  };

    $(".learnmore").click(function() {
    $("#learnmoretext").slideDown();
    $(".learnmore").hide();
  });
})
 
 