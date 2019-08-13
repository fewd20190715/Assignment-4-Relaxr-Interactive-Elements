$('document').ready(onReady)
function onReady() {   
$('.readmore').click(readMore) 
function readMore() {
   $('.readmore').hide();
   $('#show-this-on-click').slideDown();
   $('.readless').show();
}
$('.readless').click(readLess);
function readLess() {
   $('#show-this-on-click').slideUp();
   $('.readless').hide();
   $('.readmore').show();
}
$('.learnmore').click(LearnMore);
function LearnMore() {
   $('#learnmoretext').slideDown();
   $('.learnmore').hide();
}
// Used .click as my event because submit pertains to forms
$('.button').click(onSubmit);
function onSubmit(event) {
      event.preventDefault();
}
}
// Not sure why, but my code wouldn't work with the declarations separate at the bottom. Not sure why and what proper syntax
// $('document').ready(onReady);
// $('.readmore a').click(readMore);
// $('.readless a').click(readLess);
// $('.learnmore').click(LearnMore);
// $('.button').submit(onSubmit);
