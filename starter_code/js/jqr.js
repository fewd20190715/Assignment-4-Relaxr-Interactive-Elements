$(document).ready(onReady);
function onReady(){

$('.read-more').click(function() {
    $("#show-this-on-click").slideDown();
    $('.read-more').hide();
    $(".readless-hide").show();
});

$('.readless-hide').click(function() {
    $("#show-this-on-click").slideUp();
    $('.read-more').show();
    $(".readless-hide").hide();
});

$('.learnmore').click(function() {
    $("#learnmoretext").slideDown();
    $('.learnmore').hide();
    $('.readLessHide').show();
});

$('readLessHide').click(function() {
    $("#learnmoretext").slideUp();
    $('.readLessHide').hide();
    $('.learnmore').show();

});  
}