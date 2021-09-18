$(function() {
  var nav_bar = $('#nav_bar');
  var main_title = $('#nav_head_title');
  var nav_right_items = $('.right_nav_items');
  var nav_right_items_a = $('.right_nav_items a');
  var nav_left_items = $('#nav_bar_link p');
  var github_box = $('.github_box');
  var github_box_a = $('.github_box a');

  var baseHeight = nav_bar.height();
  nav_bar.css({
    height: baseHeight,
  });

  var initialWidth = $( window ).width();
  if (initialWidth < 774) {
    nav_right_items.hide();
    nav_right_items.css({
      width: 0
    });

    main_title.css({
      'padding-top': 10 + 'px',
      'padding-bottom': 10 + 'px',
      'margin-top': 0 + 'px',
      'margin-bottom': 0 + 'px',
      'text-align' : 'right',
      'width' : 40 + '%',
      'font-size': 50 + 'px'
    });

    nav_left_items.css({
      'margin-left': 0 + 'px',
      'width' : 70 + '%',
      'font-size': 2 + 'vh'
    });

    github_box.css({
      'left': -9 + '%',
    });

    github_box_a.css({
      'text-align' : 'center',
      'margin-top': 15 + 'px',
      'font-size': 15 + 'px',
      'padding': 4 + 'px'
    });

  } else {

  }

  $(window).resize(function() {

    if ($(this).width() < 774) {
  
      nav_right_items.hide();

      nav_right_items.css({
        width: 0
      });

      main_title.css({
        width: 90 + "%"
      });

      nav_left_items.css({
        'font-size': 2 + 'vh'
      });
  
    } else {
  
      nav_right_items.show();
  
      nav_right_items.css({
        width: 40 + "vw"
      });

      main_title.css({
        width: 60 + "%"
      });

      nav_left_items.css({
        'font-size': 1.4 + 'vmax'
      });
    }
  
  });

  var currentFontSize = calculateFontSize();//vw
  var fontBoundary = 350;
  $(window).scroll(function() {
    //change this
    var windowHeight = $( window ).height();
    var winScrollTop = $(window).scrollTop();

    //change font on scroll
    if (winScrollTop <= 5) { //set initial size
      nav_right_items_a.css({
        'font-size': currentFontSize + 'vw'
      });

      nav_left_items.css({
        'font-size': currentFontSize + 'vw'
      });

    } else if (winScrollTop < fontBoundary && winScrollTop > 5) { //set dynamic size
      //set font
      var fontSizeValue = getCurrentFontSize(winScrollTop, currentFontSize);
      nav_right_items_a.css({
        'font-size': fontSizeValue + 'vmax'
      });
      nav_left_items.css({
        'font-size': fontSizeValue + 'vmax'
      });
      
      //set nav bar height size on scroll
      var newHeight = calculateHeightToSet(winScrollTop, 220);
      nav_bar.css({
        height: newHeight
      });
      
      //set opacity on scroll
      opacityValue = calculateOpacityValue(winScrollTop, 220);
      main_title.css({
        opacity: opacityValue
      });
    } else { //set minimum size

      nav_bar.css({
        height: 70
      });

      main_title.css({
        opacity: 0
      });

      var fontSizeValue = getCurrentFontSize(fontBoundary, currentFontSize);
      nav_right_items_a.css({
        'font-size': 1.0 + 'vmax'
      });

      nav_left_items.css({
        'font-size': 1.0 + 'vmax'
      });
      
    }
  });

  function calculateHeightToSet(currentScroll, scrollBoundary) {
    var finalHeight = (scrollBoundary) - (currentScroll) * (9 / 10);
    return finalHeight;
  }

  function calculateOpacityValue(currentScroll, scrollBoundary) {
    var opacityValue = 1 - (currentScroll / scrollBoundary);
    return opacityValue;
  }

  //calculate font size: font from 1vw ~ 1.5vw
  //current scroll in px current font in px
  function getCurrentFontSize(currentScroll, currentFontSize) {
    //vm to px
    var variationRnage = 0.5 / (100/($(window).width()));
    //all in px
    var finalValue = ((1 / currentScroll) * variationRnage) + (currentFontSize * 2 / 3);
    console.log("In vm: " + finalValue);
    return finalValue;
  }

  function calculateFontSize() {
    //px
    var currentFontSize = nav_right_items_a.css('font-size');
    //get only the digits
    currentFontSize = parseInt(currentFontSize, 10);
    //change px in vw suffix
    currentFontSize = currentFontSize * (100/($(window).width()));
    return currentFontSize;
  }
});