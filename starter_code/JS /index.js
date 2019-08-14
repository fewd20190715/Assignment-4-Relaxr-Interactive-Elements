

$(document).ready(function() {
  //do jQuery stuff when DOM is ready
    
  $(".readless").hide();


function toggleReadmore(){ 
  $(".readmore").hide();
  $("#show-this-on-click").slideDown();
  $(".readless").show();


}


function toggleLess(){
$(".readless").hide(); 
$("#show-this-on-click").slideUp();
$(".readmore").show();

}


  function sideBarMore() {
  $(".learnmore").hide();
  $("#learnmoretext").slideDown();
  }


  $(".readmore").click(toggleReadmore);
  $(".readless").click(toggleLess)
  $(".learnmore").click(sideBarMore); 

});

//adding comments to update