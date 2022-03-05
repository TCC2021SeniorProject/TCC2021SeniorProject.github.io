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
  boxContentHandler();
});