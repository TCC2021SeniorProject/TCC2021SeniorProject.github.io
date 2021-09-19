//hover function
$(function() {
  //left element of navigation
  $('#nav_bar_link').hover(function() {
    $('#nav_bar_link .nav_title').css('color', 'rgb(255, 255, 255)');
  }, function() {
    $('#nav_bar_link .nav_title').css('color', 'rgb(185, 185, 185)');
  });

  //home button
  $('#home_nav_btn').hover(function() {
    $('#home_nav_p').css('transition-duration', '0.8s');
    $('#home_nav_p').css('color', 'rgb(255, 255, 255)');
  }, function() {
    $('#home_nav_p').css('transition-duration', '0.8s');
    $('#home_nav_p').css('color', 'rgb(185, 185, 185)');
  });

  //semester 1 button
  $('#sem1_nav_btn').hover(function() {
    $('#sem1_nav_p').css('transition-duration', '0.8s');
    $('#sem1_nav_p').css('color', 'rgb(255, 255, 255)');
  }, function() {
    $('#sem1_nav_p').css('transition-duration', '0.8s');
    $('#sem1_nav_p').css('color', 'rgb(185, 185, 185)');
  });

  //semester 2 button
  $('#sem2_nav_btn').hover(function() {
    $('#sem2_nav_p').css('transition-duration', '0.8s');
    $('#sem2_nav_p').css('color', 'rgb(255, 255, 255)');
  }, function() {
    $('#sem2_nav_p').css('transition-duration', '0.8s');
    $('#sem2_nav_p').css('color', 'rgb(185, 185, 185)');
  });
});

$(function() {
  var nav_bar = $('#nav_bar');
  var main_title = $('#nav_head_title');
  var nav_right_items = $('.right_nav_items');
  var nav_right_items_a = $('.right_nav_items a');
  var nav_left_items = $('#nav_bar_link p');
  var github_box = $('.github_box');
  var github_box_a = $('.github_box a');
  var fisrt_sem_table_row = $('#first_semester_table td .table_row_type p');
  var second_sem_table_row = $('#second_semester_table td .table_row_type p');
  var outer_table = $('.outer_table');
  var sub_header = $('.sub_header');
  var intro_table = $('#introduction_table');
  var intro_table_content = $('#introduction_table p');
  var intro_table_row = $('#intro_div .table_row_type');

  var baseHeight = nav_bar.height();
  nav_bar.css({
    height: baseHeight,
  });

  var initialWidth = $( window ).width();
  if (initialWidth < 767) {    
    nav_right_items.hide();
    nav_right_items.css({
      width: 0
    });

    main_title.css({
      'padding-top': 10 + 'px',
      'padding-bottom': 10 + 'px',
      'margin-top': 0 + 'px',
      'margin-bottom': 0 + 'px',
      'margin_right' : 15 + 'px',
      'text-align' : 'right',
      'width' : 30 + '%',
      'font-size': 50 + 'px'
    });

    nav_left_items.css({
      'margin-left': 0 + 'px',
      'width' : 100 + '%',
      'font-size': 20 + 'px'
    });

    github_box.css({
      'left': -6 + '%',
    });

    github_box_a.css({
      'text-align' : 'center',
      'margin-top': 15 + 'px',
      'font-size': 15 + 'px',
      'padding': 4 + 'px'
    });

    outer_table.css({
      'margin-left': 20 + '%',
    });

    sub_header.css({
      'margin-left': 20 + '%',
    });

    intro_table.css({
      'margin-left': 7.5 + '%',
    });

    intro_table_row.css({
      'min-width' : 20 + 'px',
      'width' : 20 + 'px',
      'font-size': 15 + 'px',
    });

    intro_table_content.css({
      'font-size': 16 + 'px',
    });

    fisrt_sem_table_row.css({
      'font-size': 15 + 'px',
    });

    second_sem_table_row.css({
      'font-size': 15 + 'px',
    });

    nav_bar.css({
      height: 70
    });

  } else {
    intro_table_row.css({
      'font-size': 20 + 'px',
    });

    fisrt_sem_table_row.css({
      'font-size': 20 + 'px',
    });

    second_sem_table_row.css({
      'font-size': 20 + 'px',
    });

    outer_table.css({
      'margin-left': 20 + '%',
    });

    sub_header.css({
      'margin-left': 20 + '%',
    });
  }

  $(window).resize(function() {

    if ($(this).width() < 767) {
  
      nav_right_items.hide();

      nav_right_items.css({
        width: 0
      });

      main_title.css({
        'padding-top': 10 + 'px',
        'padding-bottom': 10 + 'px',
        'margin-top': 0 + 'px',
        'margin-bottom': 0 + 'px',
        'margin_right' : 15 + 'px',
        'text-align' : 'right',
        'width' : 30 + '%',
        'font-size': 50 + 'px'
      });

      nav_left_items.css({
        'font-size': 2.5 + 'vh'
      });

      intro_table_row.css({
        'font-size': 13 + 'px',
        'margin-left': 7.5 + '%'
      });

      fisrt_sem_table_row.css({
        'font-size': 13 + 'px',
      });
  
      second_sem_table_row.css({
        'font-size': 13 + 'px',
      });


      outer_table.css({
        'margin-left': 13 + '%',
      });

      sub_header.css({
        'margin-left': 13 + '%',
      });

      github_box.css({
        'left': -3 + '%',
      });

      github_box_a.css({
        'text-align' : 'center',
        'margin-top': 15 + 'px',
        'font-size': 15 + 'px',
        'padding': 4 + 'px'
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

      intro_table_row.css({
        'font-size': 20 + 'px',
      });

      fisrt_sem_table_row.css({
        'font-size': 20 + 'px',
      });
  
      second_sem_table_row.css({
        'font-size': 20 + 'px',
      });

      outer_table.css({
        'margin-left': 20 + '%',
      });

      sub_header.css({
        'margin-left': 20 + '%',
      });

      github_box.css({
        'left': -1 + '%',
      });

      github_box_a.css({
        'text-align' : 'center',
        'padding-top': 10 + 'px',
        'padding-bottom': 15 + 'px',
        'padding-left': 20 + 'px',
        'padding-right': 15 + 'px',
        'font-size': 25 + 'px',
        'padding': 10 + 'px'
      });
    }
  
  });

  var currentFontSize = calculateFontSize();//vw
  var fontBoundary = 350;
  $(window).scroll(function() {
    if ($(this).width() >= 767) {
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