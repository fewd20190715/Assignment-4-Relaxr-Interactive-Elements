//onReadyFunction Start
function onReadyFunction() {

function showArticle2() {
    $('#more-article2').slideDown();
    $('#read-article2').hide();
    $('#unread-article2').show();
}
function showArticle1() {
    $('#more-article1').slideDown();
    $('#read-article1').hide();
    $('#unread-article1').show();
}
function hideContent1() {
    $('#more-article1').slideUp();
    $('#read-article1').show();
    $('#unread-article1').hide();
}
function hideContent2() {
    $('#more-article2').slideUp();
    $('#read-article2').show();
    $('#unread-article2').hide();
}
function showMoreText() {
    $('#more-text').slideToggle();
    $('#less').show();
    $('#more').hide();
}
function hideMoreText() {
    $('#more-text').slideToggle();
    $('#less').hide();
    $('#more').show();
}

/*
Create a pop-up form for sign up button
*/

function formPopUp() {
    prompt("Add to email list:");
    // click.preventDefault();
}

$('#unread-article1').hide();
$('#unread-article2').hide();
$('#more-article1').hide();
$('#more-article2').hide();
$('#less').hide();
$('#more-text').hide();


$('#read-article1').click(showArticle1);
$('#read-article2').click(showArticle2);
$('#unread-article1').click(hideContent1);
$('#unread-article2').click(hideContent2);
$('#more').click(showMoreText);
$('#less').click(hideMoreText);

/* 
Pop-up form on click 
*/
$('#sign-up').addEventListener('click', function(e) {
    e.preventDefault(); 
});

//onReadyFunction Ends
}
$('document').ready(onReadyFunction);