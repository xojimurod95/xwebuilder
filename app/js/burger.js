$(document).ready(function () {
    let $burger = $('.burger');
    let $menu = $('.header_menu');
    let $menu_top = $('nav');
    let $closed = $('#closed');
    let $links = $('.links');
    // 

    //
    $burger.click(function () {
        if ($menu.css('right') == '-300px' || $menu_top.hasClass('fixed_top')) {
            $menu.animate({
                right: 0,
            });
            $menu_top.removeClass('fixed_top');
        }

        // else {
        //     $menu.animate({
        //         right: '-300px'
        //     });
        // }

    })

    // /*  */ //

    $closed.click(function () {
        if ($menu.css('right') == '0px' || $menu_top.hasClass('fixed_top')) {
            $menu.animate({
                right: '-300px',
            });
            $menu_top.addClass('fixed_top');
        }
    })

    // /*  */ //

    $links.click(function (e) {
        e.preventDefault();
        var $id = $(this).attr('href');
        let $target = $($id).offset().top;
        $('html, body').animate({
            scrollTop: $target,
        }, 1000)
    })

});
