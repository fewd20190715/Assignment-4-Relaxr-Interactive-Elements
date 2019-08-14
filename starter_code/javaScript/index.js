

function onReady() {
//*******Side section*******//
    function onLearnMoreClick() {
        $('#learnmoretext').slideDown(); 
        $('.learnmore').hide()
        $('.show-less').show()
    }

    function onLearnLessClick() {
        $('.show-less').hide()
        $('#learnmoretext').slideUp(); 
        $('.learnmore').show()
    }

//*******Main section*******//
    function onReadMoreClick() {
        $('#show-this-on-click').slideDown()
        $('.readmore').hide()
        $('.readless').show()
    }

    function onReadLessClick() {
        $('.readless').hide()
        $('#show-this-on-click').slideUp()
        $('.readmore').show()
    }

    $('.learnmore').click(onLearnMoreClick);
    $('.show-less').click(onLearnLessClick);

    $('.readmore').click(onReadMoreClick);
    $('.readless').click(onReadLessClick);

} 


$('document').ready(onReady)

