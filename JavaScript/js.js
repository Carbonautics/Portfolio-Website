//change active class
$(document).ready(function () {
    $('.navbarr-nav li a').click(function(e) {
        $('.navbarr-nav li.active').removeClass('active');
        var $parent = $(this).parent();
        $parent.addClass('active');
        //e.preventDefault();
    });
});
