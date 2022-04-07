$('.toggle').focusin(function() {
  $(this).addClass('active');
  $('.search').addClass('move').focus();
});

$('.toggle').focusout(function() {
  $(this).removeClass('active').val("");
  $('.search').removeClass('move');
});