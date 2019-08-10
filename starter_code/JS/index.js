function showReadMore() {
    $("#show-this-on-click").show();
    $(".readmore").hide();
    $(".readless").show();
}

function hideReadMore() {
    $("#show-this-on-click").hide();
    $(".readmore").show();
    $(".readless").hide();
}

$(".readmore").click(showReadMore);
$(".readless").click(hideReadMore);
