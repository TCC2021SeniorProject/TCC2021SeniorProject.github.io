function boxContentHandler() {
  //sponsor box hover
  $('#sponsor_box').hover(function() {
    $('#sponsor_content').css('display', 'none');
    $('#sponsor_hover_content').css('display', 'inline-block');
  }, function() {
    $('#sponsor_content').css('display', 'inline-block');
    $('#sponsor_hover_content').css('display', 'none');
  });

  //First member box hover
  $('#first_member_box').hover(function() {
    $('#first_member_content').css('display', 'none');
    $('#first_member_hover_content').css('display', 'inline-block');
  }, function() {
    $('#first_member_content').css('display', 'inline-block');
    $('#first_member_hover_content').css('display', 'none');
  });

  //Second member box hover
  $('#second_member_box').hover(function() {
    $('#second_member_content').css('display', 'none');
    $('#second_member_hover_content').css('display', 'inline-block');
  }, function() {
    $('#second_member_content').css('display', 'inline-block');
    $('#second_member_hover_content').css('display', 'none');
  });

  //Third member box hover
  $('#third_member_box').hover(function() {
    $('#third_member_content').css('display', 'none');
    $('#third_member_hover_content').css('display', 'inline-block');
  }, function() {
    $('#third_member_content').css('display', 'inline-block');
    $('#third_member_hover_content').css('display', 'none');
  });
}

//Set initial webpage setting on load
$(function() {
  const MINIMUM_WINDOW_WIDTH = 800;
  let max_window_trigger = false;

  //viewpoint width
  let mobile_w =  window.innerWidth;

  //body
  let body = $('body');

  //intro cards
  let intro_div = $('#intro_div')
  let box_repeater = $('.box_repeater');
  let box_container_wrap = $('.container_wrapper');
  let box_email_text = $('.email_address_p');
  let box_icons = $('.span_icon img');
  let initialWidth = $( window ).width();

  //animation section
  let canvas = $('#canvas')

  //semester boxes
  let main_section = $('#main_section');
  let semester_section = $('.semester_section');
  let row_box_div = $('.row_box_div');
  let subject_span_icon = $('.subject_span_icon');
  let sub_header_div = $('.sub_header_div');
  let subject_and_time = $('.subject_and_time');
  let ul_first_semester_plan_list = $('.ul_first_semester_plan_list');
  let semester_box_repeater = $('.semester_box_repeater');
  let box_button_text = $('.div_li_first_semester_plan_list_item a');
  let footer_legal = $('.footer_legal');

  boxContentHandler();

  function miniSize() {

    body.css({
      'width' : 100 + "%",
    });

    canvas.css({
      display: 'none'
    });

    $('#download_div').css({
      'display' : 'none',
    });

    intro_div.css({
      'margin-left' : 5 + '%',
      'margin-top': 50 + 'px',
    });

    main_section.css({
      'width': mobile_w,
      'margin': 0 + '%',
    });

    box_repeater.css({
      'grid-template-columns' : 'repeat(1, calc(100%)',
    });

    box_container_wrap.css({
      'min-width': 'none',
      'width': 60 + '%',
      'height' : 400 + 'px'
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
    //reload attributes on resize
    if ($(this).width() < MINIMUM_WINDOW_WIDTH && max_window_trigger) {
      max_window_trigger = false;
      max_window_trigger = true;
      setTimeout(function(){
        window.location.reload();
      },1);
      miniSize();
    } else {
      setTimeout(function(){
        window.location.reload();
      },1);
    }
  });
});