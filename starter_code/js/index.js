// If user clicks "Read More" on the primary column:

// THEN have the text in the <p> tag slide down along with a "Read Less" link in the blog post using $.slideDown() and $.show()
// hide the "Read More" link using $.hide()

// If a user clicks "Read Less" on the primary column:

// have the <p> slide up and hide the "Read Less" link using $.slideUp() and $.hide()
// show the "Read More" link using $.show()

// if user clicks "Learn More" link in the sidebar, have the <span> inside that <p> slide down and hide the "Learn More" link using $.slideDown() and $.hide()


$('document').ready(onReadyFunction) //everything goes in this function//


function onReadyFunction() {

    /* Clicking the Read More button*/
    function onReadMoreClick() {
        $('#show-this-on-click').slideDown();
        $('.readless').show();
        $('.readmore').hide(); 
    }
    
    /* Clicking the Read Less button*/
    function onReadLessClick() {
        $('#show-this-on-click').slideUp();
        $('.readless').hide();
        $('.readmore').show();
    }

    $('.readmore').click(onReadMoreClick);
    $('.readless').click(onReadLessClick);

    /* Clicking the Learn more button*/
    function onLearnMoreClick(){
        $('#learnmoretext').slideDown();
        $('.learnmore').hide();
    }

    $('#learnmoretext').click(onLearnMoreClick);
    $('.learnmore').click(onLearnMoreClick);

    

    /*prevent form submission*/
    function onSubmit(event) {
        event.preventDefault();
    }

    $('#form-id').submit(onSubmit);

}
