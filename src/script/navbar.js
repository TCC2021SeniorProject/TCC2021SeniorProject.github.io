function navbarReaction() {
    const SCROLL_BOUNDARY = 120;
    let currentFontSize = calculateFontSize();//vw
    $(window).scroll(function() {
        let nav_bar_img = $('.nav_bar_icon img');
        let nav_bar = $('#nav_bar');
        let nav_bar_link = $('#nav_bar_link');
        let right_nav_items = $('.right_nav_items');

        nav_bar_img.css('transition-duration', '0.8s');
        let winScrollTop = $(window).scrollTop();

        //Top of the page
        if (winScrollTop <= 15) { //set initial size

            nav_bar_img.css({
                'width': 70 + 'px',
                'height': 70 + 'px',
                'margin-top': 2 + 'em',
            });

            nav_bar.css({
                height: 160
            });

            nav_bar_link.css({
                opacity: 1
            });

            right_nav_items.css({
                opacity: 1
            });

        } else if (winScrollTop < SCROLL_BOUNDARY && 15 < winScrollTop) { //set dynamic size
            let fontSizeValue = getCurrentFontSize(winScrollTop, currentFontSize);
            nav_bar_img.css({
                'width': 30 + 'px',
                'height': 30 + 'px',
                'margin-top': 0.2 + 'em',
            });

            let newHeight = calculateHeightToSet(winScrollTop, 160);
            nav_bar.css({
                height: newHeight
            });


            //set opacity on scroll
            let opacityValue = calculateOpacityValue(winScrollTop, 160);

            nav_bar_link.css({
                opacity: opacityValue - 0.3
            });

            right_nav_items.css({
                opacity: opacityValue - 0.3
            });
        }
    });
}

//Calculates nav bar height
function calculateHeightToSet(currentScroll, scrollBoundary) {
    return (scrollBoundary) - (currentScroll) * (9 / 10);
}

//Calculates nav bar opacity
function calculateOpacityValue(currentScroll, scrollBoundary) {
    return 0.6 - (currentScroll / scrollBoundary);
}

//calculate font size: font from 1vw ~ 1.5vw
//current scroll in px
function getCurrentFontSize(currentScroll, currentFontSize) {
    //vm to px
    let variationRange = 0.5 / (100/($(window).width()));
    //all in px
    return ((1 / currentScroll) * variationRange) + (currentFontSize * 2 / 3);
}

function calculateFontSize() {
    //px
    let currentFontSize = $('.right_nav_items a').css('font-size');
    //get only the digits
    currentFontSize = parseInt(currentFontSize, 10);
    //change px in vw suffix
    currentFontSize = currentFontSize * (100/($(window).width()));
    return currentFontSize;
}

navbarReaction();