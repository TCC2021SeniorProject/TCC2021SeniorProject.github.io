//anything that goes below 1050px, will be considered as mobile
const MINIMUM_WINDOW_WIDTH = 800;

var max_window_trigger;

function navBarIconHover() {
  $('#nav_bar_icon img').hover(function() {
    $('#nav_bar_icon img').css('transition-duration', '1.5s');
    $('#nav_bar_icon img').css('transform', 'rotate(-360deg)');
  }, function() {
    $('#nav_bar_icon img').css('transition-duration', '1.5s');
    $('#nav_bar_icon img').css('transform', 'rotate(0deg)');
  });
}

function imgResize(targetImg, parent_div) {

}

function boxContentHandler() {
  //sponsor box hover
  $('#sponser_box').hover(function() {
    $('#sponser_content').css('display', 'none');
    $('#sponser_hover_content').css('display', 'block');
  }, function() {
    $('#sponser_content').css('display', 'block');
    $('#sponser_hover_content').css('display', 'none');
  });

  //First member box hover
  $('#first_member_box').hover(function() {
    $('#first_member_content').css('display', 'none');
    $('#first_member_hover_content').css('display', 'block');
  }, function() {
    $('#first_member_content').css('display', 'block');
    $('#first_member_hover_content').css('display', 'none');
  });

  //Second member box hover
  $('#second_member_box').hover(function() {
    $('#second_member_content').css('display', 'none');
    $('#second_member_hover_content').css('display', 'block');
  }, function() {
    $('#second_member_content').css('display', 'block');
    $('#second_member_hover_content').css('display', 'none');
  });

  //Third member box hover
  $('#third_member_box').hover(function() {
    $('#third_member_content').css('display', 'none');
    $('#third_member_hover_content').css('display', 'block');
  }, function() {
    $('#third_member_content').css('display', 'block');
    $('#third_member_hover_content').css('display', 'none');
  });
}

//Set initial webpage setting on load
$(function() {
  var element = document.querySelector('body');
  var initial_style = window.getComputedStyle(element);

  function copyNodeStyle(sourceNode, targetNode) {
    const computedStyle = window.getComputedStyle(sourceNode);
    Array.from(computedStyle).forEach(key => targetNode.style.setProperty(key, computedStyle.getPropertyValue(key), computedStyle.getPropertyPriority(key)))
  }

  //viewpoint width
  var window_w = 100 + "%";
  var mobile_w =  window.innerWidth;

  //body
  var body = $('body');

  //Github logo
  var github_button = $('.github_box a');
  var github_image = $('.github_box img');

  //top navigation
  var nav_bar = $('#nav_bar');
  var nav_icon = $('#nav_bar_icon img');
  var nav_bar_div = $('nav_bar_link');
  var main_title = $('#nav_head_title');
  var main_title_h = $('#nav_head_title h1');
  var nav_right_items = $('.right_nav_items');

  //intro cards
  var intro_div = $('#intro_div')
  var box_repeater = $('.box_repeater');
  var box_container_wrap = $('.container_wrapper');
  var box_email_text = $('.email_address_p');
  var box_icons = $('.span_icon img');
  var initialWidth = $( window ).width();

  //animation section
  var canvas = $('#canvas')

  //semester boxes
  var main_section = $('#main_section');
  var semester_section = $('.semester_section');
  var row_box_div = $('.row_box_div');
  var subject_span_icon = $('.subject_span_icon');
  var sub_header_div = $('.sub_header_div');
  var subject_and_time = $('.subject_and_time');
  var ul_first_semester_plan_list = $('.ul_first_semester_plan_list');
  var semester_box_repeater = $('.semester_box_repeater');
  var box_button_text = $('.div_li_first_semester_plan_list_item a');
  var footer_legal = $('.footer_legal');

  navBarIconHover();

  boxContentHandler();

  function miniSize() {
    body.css({
      'width' : 100 + "%",
    });

    canvas.css({
      display: 'none'
    });

    github_button.css({
      'margin-bottom': 30 + '%',
      'padding-left': 5 + 'px',
      'font-size': 12 + 'px',
      'padding': 0,
      'transform': 'rotate(270deg)',
      'transition-delay' : 0.2 + 's',
    });

    github_image.css({
      'width' : 25 + 'px',
    });

    nav_bar.css({
      'height': 75,
      'width' : mobile_w,
    });

    nav_icon.css({
      'margin-left': 5 + 'px',
      'width': 50 + 'px'
    });

    nav_bar_div.css({
      'padding-top' : 5 + 'px',
      'padding-left' : 0,
      'margin-left': 0 + 'px',
      'width' : 100 + "%",
      'font-size': 17 + 'px'
    });

    nav_left_item.css({
      'padding-top' : 5 + 'px',
      'font-size': 17 + 'px',
      'margin-left': 0 + 'px',
    });

    main_title.css({
      'padding-top': 10 + 'px',
      'padding-bottom': 10 + 'px',
      'padding-right' : 0 + '%',
      'margin-top': 0 + 'px',
      'margin-bottom': 0 + 'px',
      'text-align' : 'left',
      'width' : 30 + '%',
    });

    main_title_h.css({
      'font-size': 19 + 'px'
    });

    nav_right_items.hide();
    nav_right_items.css({
      width: 0
    });


    intro_div.css({
      'margin-top': 50 + 'px',
    });

    main_section.css({
      'width': mobile_w,
      'margin': 0 + '%',
    });

    box_repeater.css({
      'grid-template-columns' : 'repeat(1, calc(100%)',
      'width' : mobile_w,
      'margin-left': 22 + '%',
    });

    box_container_wrap.css({
      'min-width': 'none',
      'width': 60 + '%',
      'height' : 210 + 'px'
    });

    box_email_text.css({
      'font-size': 15 + 'px',
    });

    //Introduction icon
    box_icons.css({
      'width' : 50 + 'px',
    });

    //Milestone icon
    subject_span_icon.css({
      'width': 50 + '%',
      'margin-left': 35 + '%',
    });

    sub_header_div.css({
      'width': mobile_w,
      'margin-left': 1.5 + '%',
    });

    semester_section.css({
      'width': mobile_w,
    });

    row_box_div.css({
      'height': 'auto',
    });

    subject_and_time.css({
      'width': 100 + '%',
      'text-align' : 'center',
    });

    ul_first_semester_plan_list.css({
      'height' : 'auto',
      'display' : "block",
    });

    semester_box_repeater.css({
      'grid-template-columns': 'repeat(2)',
      'margin-left': 17 + '%'
    });

    box_button_text.css({
      'font-size': 12 + 'px'
    });

    footer_legal.css({
      'width': mobile_w,
      'text-align' : 'center',
    });
  }

  /*
   *          Window size function
   */
  //when opened window is smaller than the optimal size
  if (initialWidth < MINIMUM_WINDOW_WIDTH) {
    max_window_trigger = false;
    miniSize();
  } else if ($(this).width() >= MINIMUM_WINDOW_WIDTH) {
    max_window_trigger = true;
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