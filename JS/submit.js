$(function() {
  $('.form').submit(function(){
    var username = $('.username-input').val();

    $.getJSON('https://api.github.com/users/' + username)
      .done(function (data) {
        console.log(data);
      })

      .fail(function(request, status, error) {
        console.log('This failed because' + error);

      });
    return false;
  });
});
