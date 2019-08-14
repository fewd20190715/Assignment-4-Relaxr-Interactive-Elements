
$('.hide').hide();



function onReady() {

    function onReadMoreClick () {
        $('#show-this-on-click').slideDown();
        $('.readmore').hide();
        $('.readless').show();
    }

    function onReadLessClick() {
        $('#show-this-on-click').slideUp();
        $('.readless').hide();
        $('.readmore').show();
    }

    function onLearnMoreClick() {
        $('#learnmoretext').slideDown();
        $('.learnmore').hide();
    }

    $('.readmore').click(onReadMoreClick);
    $('.readless').click(onReadLessClick);
    $('.learnmore').click(onLearnMoreClick);
    
}

$('document').ready(onReady);
