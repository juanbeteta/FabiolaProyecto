$(window).on('scroll', (e) => {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
        $(".slicknav_nav").addClass("slicknav_hidden");
        $(".slicknav_nav").css("display", "none");
    }
});