function onReadyFunction() {

$("#show-this-on-click").hide();
$("#read-less-click").hide();

$("#read-more-click").click(function() {
    $("#read-more-click").hide(); {
    $("#read-less-click").show(); {
    $("#show-this-on-click").show();
};
};
});

$("#read-less-click").click(function() {
    $("#read-more-click").show(); {
        $("#read-less-click").hide(); {
            $("#show-this-on-click").hide();
    };
};
});


$("#learnmoretext").hide();

$(".learnmore").click(function(){
    $(".learnmore").hide(); {
        $("#learnmoretext").show();
};
});
}

$("document").ready(onReadyFunction)


$(".button blue").submit(onSubmit)

function onSubmit(event) {
    event.preventDefault()
};

