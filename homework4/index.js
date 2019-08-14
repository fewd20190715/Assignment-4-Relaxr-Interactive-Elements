var content = document.getElementById("content");
var button = document.getElementById("read-more");




button.onclick = function() {


  if(content.className === "open") {
    //shirink the box
    content.className = "";
    button.innerHTML = "Read More";
    $("#hide").slideToggle();
    $("#hide").hide();
    

} else{
    //expansd the box
    content.className = "open";
    button.innerHTML = "read less";
}

}


$(document).ready(function(){
  $("#learn-more").click(function(){
    $(this).prev().toggle();
     
    if($(this).text()=="") {
      $(this).text("learn-more");

    }
    else {
      $(this).text("");
    }
     
 
  });
    
});

$(document).ready(function(){
  $("#show-more").click(function(){
    $(this).prev().toggle();
     
    if($(this).text()=="read more") {
       $(this).text("read less");

    }
    else {
      $(this).text("read more");
    }
    
 
  });
  
});








