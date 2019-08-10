function showReadMore() {
    $("#show-this-on-click").slideDown();
    $("#show-this-on-click").show();
    $(".readmore").hide();
    $(".readless").slideDown();
    $(".readless").show();
}

function hideReadMore() {
    $("#show-this-on-click").slideUp();
    $("#show-this-on-click").hide();
    $(".readmore").show();
    $(".readless").slideUp();
    $(".readless").hide();
}

function learnMore() {
    $("#learnmoretext").slideDown();
    $(".learnmore").hide();
}

$(".readmore").click(showReadMore);
$(".readless").click(hideReadMore);
$(".learnmore").click(learnMore);


