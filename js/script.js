
$(document).ready(function() {

    // navigation bar toggle
    $('#navbar-toggler').click(function() {
        $('.navbar-collapse').slideToggle(400);
    })

    // friends toggle
    $('.btn-white').click(function() {
        $('.fren-collapse').slideToggle(50);
    })

    // portforlio toggle
    $('.btn-trans').click(function() {
        $('.port-container').slideToggle(50);
    })
});