function navbarReaction() {
    const SCROLL_BOUNDARY = 350;
    var currentFontSize = calculateFontSize();//vw
    $(window).scroll(function() {
        $('#nav_bar_icon img').css('transition-duration', '0.8s');
        var winScrollTop = $(window).scrollTop();
        //Top of the page
        if (winScrollTop <= 15) { //set initial size
            $('.right_nav_items a').css({
                'font-size': 1.3 + 'em'
            });

            $('#nav_bar_icon img').css({
                'width': 70 + 'px',
                'transition-duration': 0.5 + 's'
            });

            $('#nav_bar').css({
                height: 150
            });

            $('#nav_head_title').css({
                opacity: 1
            });

        } else if (winScrollTop < SCROLL_BOUNDARY && winScrollTop > 5) { //set dynamic size
            var fontSizeValue = getCurrentFontSize(winScrollTop, currentFontSize);
            //set font
            $('.right_nav_items a').css({
                'font-size': fontSizeValue + 'vw'
            });
            $('#nav_title').css({
                'font-size': fontSizeValue + 'vw'
            });

            $('#nav_bar_icon img').css({
            'width': 60 + 'px'
            });

            //set nav bar height size on scroll
            var newHeight = calculateHeightToSet(winScrollTop, 160);
            $('#nav_bar').css({
            height: newHeight
            });

            //set opacity on scroll
            opacityValue = calculateOpacityValue(winScrollTop, 220);

            $('#nav_head_title').css({
            opacity: opacityValue
            });

        } else { //set minimum size
            var fontSizeValue = getCurrentFontSize(winScrollTop, currentFontSize);
            $('#nav_bar_icon img').css({
            'width': 50 + 'px'
            });

            $('#nav_bar').css({
            height: 60
            });

            $('#nav_head_title').css({
            opacity: 0
            });

            var fontSizeValue = getCurrentFontSize(SCROLL_BOUNDARY, currentFontSize);
            $('.right_nav_items a').css({
                'font-size': fontSizeValue + 'vw'
            });

            $('#nav_title').css({
                'font-size': fontSizeValue + 'vw'
            });
        }
    });
}

//Calculates nav bar height
function calculateHeightToSet(currentScroll, scrollBoundary) {
    var finalHeight = (scrollBoundary) - (currentScroll) * (9 / 10);
    return finalHeight;
}

//Calculates nav bar opacity
function calculateOpacityValue(currentScroll, scrollBoundary) {
    var opacityValue = 0.6 - (currentScroll / scrollBoundary);
    return opacityValue;
}

//calculate font size: font from 1vw ~ 1.5vw
//current scroll in px
function getCurrentFontSize(currentScroll, currentFontSize) {
    //vm to px
    var variationRnage = 0.5 / (100/($(window).width()));
    //all in px
    var finalValue = ((1 / currentScroll) * variationRnage) + (currentFontSize * 2 / 3);
    return finalValue;
}

function calculateFontSize() {
    //px
    var currentFontSize = $('.right_nav_items a').css('font-size');
    //get only the digits
    currentFontSize = parseInt(currentFontSize, 10);
    //change px in vw suffix
    currentFontSize = currentFontSize * (100/($(window).width()));
    return currentFontSize;
}

$(function() {
    const MINIMUM_WINDOW_WIDTH = 800;
    navbarReaction();

    var initialWidth = $( window ).width();
    if (initialWidth < MINIMUM_WINDOW_WIDTH) {
        max_window_trigger = false;
        miniSize();
      } else if ($(this).width() >= MINIMUM_WINDOW_WIDTH) {
        max_window_trigger = true;
      }

    function miniSize() {

        $('#nav_bar').css({
            'text-align': 'center',
        });

        $('#nav_bar_link').css({
            'display': 'none',
        });

        $('#nav_bar_icon').css({
            'display': 'none',
        });

        $('#nav_head_title').css({
            "width": 50 + '%',
        });

        $('.right_nav_items').css({
            "width": 50 + '%',
        });

    }

    $(window).resize(function() {
        //reload attritubes on resize
        if ($(this).width() < MINIMUM_WINDOW_WIDTH && max_window_trigger) {
        max_window_trigger = false;
        max_window_trigger = true;
        setTimeout(function(){
            window.location.reload();
        },1);
        miniSize();
        } else if ($(this).width() >= MINIMUM_WINDOW_WIDTH) {
        max_window_trigger = true;
        setTimeout(function(){
            window.location.reload();
        },1);
        }
    });
});