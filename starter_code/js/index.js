$(document).ready(function () {

    $('.readmore').click(onReadMoreClick)
    $('.readless').click(onReadLessClick)

    $('.learnmore').click(onLearnMoreClick)

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

    function onLearnMoreClick() {
        $('#learnmoretext').slideDown()
        $('.learnmore').hide()
        $('.show-less').show()
    }

    $('.button').click(function(event){
        event.preventDefault()
      })

})