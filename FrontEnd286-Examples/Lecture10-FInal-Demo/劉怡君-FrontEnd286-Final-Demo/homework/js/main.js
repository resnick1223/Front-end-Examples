$(function () {
    new WOW().init();
    $('nav a').bind('click', function (event) {
        var anchor = $(this);
        var navHeight = 50;
        var animateTime = 1000;
        var target = anchor.attr('href');
        var timingFunction = 'easeInCubic';
        $('html,body').stop().animate({
            scrollTop: ($(target).offset().top - navHeight)
        }, animateTime, timingFunction);

        event.preventDefault();
    });

    $("#goBack").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1300);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#goBack').fadeIn("fast");
        } else {
            $('#goBack').stop().fadeOut("fast");
        }

    });
});
