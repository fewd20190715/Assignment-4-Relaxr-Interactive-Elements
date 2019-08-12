$(document).ready(function() {
$('.read-more, .less-content').hide();
$('#more-content1').click(readMore1)
$('#less-content1').click(readLess1)
function readMore1() {
   $('#more-content1').hide();
   $('#read-more1').slideDown();
   $('#less-content1').show();
}
function readLess1() {
   $('#read-more1').slideUp();
   $('#less-content1').hide();
   $('#more-content1').show();
}
$('#more-content2').click(readMore2)
$('#less-content2').click(readLess2)
function readMore2() {
   $('#more-content2').hide();
   $('#read-more2').slideDown();
   $('#less-content2').show();
}
function readLess2() {
   $('#read-more2').slideUp();
   $('#less-content2').hide();
   $('#more-content2').show();
}
$('#learn-more').click(LearnMore)
function LearnMore() {
$('#learn-more-content').slideDown();
$('#learn-more').hide();
}
});

