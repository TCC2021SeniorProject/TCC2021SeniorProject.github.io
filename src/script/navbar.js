const MAX_SCROLL_BOUNDARY = 350;

function navbarReaction() {
    var currentFontSize = calculateFontSize();//vw
    $(window).scroll(function() {
        $('#nav_bar_icon img').css('transition-duration', '0.8s');
        var winScrollTop = $(window).scrollTop();
        //Top of the page
        if (winScrollTop <= 15) { //set initial size
            $('.right_nav_items a').css({
            'font-size': currentFontSize + 'vw'
            });

            $('#nav_title').css({
            'font-size': currentFontSize + 'vw'
            });

            $('#nav_bar_icon img').css({
            'width': 70 + 'px',
            'transition-duration': 0.5 + 's'
            });

            $('#nav_bar').css({
            height: 160
            });

            $('#nav_head_title').css({
            opacity: 1
            });

        } else if (winScrollTop < MAX_SCROLL_BOUNDARY && winScrollTop > 5) { //set dynamic size
            //set font
            var fontSizeValue = getCurrentFontSize(winScrollTop, currentFontSize);
            $('.right_nav_items a').css({
            'font-size': fontSizeValue + 'vmax'
            });
            $('#nav_title').css({
            'font-size': fontSizeValue + 'vmax'
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
            $('#nav_bar_icon img').css({
            'width': 50 + 'px'
            });

            $('#nav_bar').css({
            height: 60
            });

            $('#nav_head_title').css({
            opacity: 0
            });

            var fontSizeValue = getCurrentFontSize(MAX_SCROLL_BOUNDARY, currentFontSize);
            $('.right_nav_items a').css({
            'font-size': 1.0 + 'vmax'
            });

            $('#nav_title').css({
            'font-size': 1.0 + 'vmax'
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
  navbarReaction();
});