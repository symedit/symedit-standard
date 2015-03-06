// Start carousels
$(function(){
    $('.carousel').carousel({interval:5000});
});

// Setup lightbox
$(document).ready(function ($) {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            'left_arrow_class': '.icon-chevron-left .left',
            'right_arrow_class': '.icon-chevron-right .right'
        });
    });
});