$('document').ready(onReadyFunction);

//Im not at all sure if this is right

function onReadyFunction() {

$("a").click(function (event) {
    event.preventDefault();
    $("<div>")
        .append("default " + event.type + " prevented")
        .appendTo("#log");
})

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

}

