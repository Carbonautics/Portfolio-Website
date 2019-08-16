//change active class
$(document).ready(function () {
    $('.navbar-nav li a').click(function(e) {
        $('.navbar-nav li.active').removeClass('active');
        var $parent = $(this).parent();
        $parent.addClass('active');
        //e.preventDefault();
    });
});
//change hover class
$(document).ready(function () {
    $('.navbar-nav li a').click(function(e) {
        $('.navbar-nav li').addClass('hover');
        var $parent = $(this).parent();
        $parent.removeClass('hover');
       // e.preventDefault();
    });
});
