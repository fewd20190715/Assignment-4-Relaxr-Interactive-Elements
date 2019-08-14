//IF read less is clicked
//THEN p slideup and read more is displayed

//when Read more button is clicked, show 

//When Read more button is clicked, 
//show the missing pargraph
// hide Read More
// show Read Less

function onReadyFunction(){

    function onReadMoreClick() {
        $('#show-this-on-click').slideDown();
        $('.readmore').hide();
        $('.readless').show();
    }

    function onReadLessClick() {
        $('#show-this-on-click').slideUp();
        $('.readmore').show();
        $('.readless').hide();
    }

    function onLearnMoreClick() {
        $('.learnmore').hide();
        $('#learnmoretext').slideDown();
    }

$('.readmore').click(onReadMoreClick) 
// {
//     event.preventDefault();
// }
$('.readless').click(onReadLessClick)
$('.learnmore').click(onLearnMoreClick) 

}

$('document').ready(onReadyFunction);