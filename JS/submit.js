$(function() {
  var userData = $('#user-data').html();
  var templete = _.template(userData, {variable: 'm'});

  $('.form').submit(function(){
    var username = $('.username-input').val();

    $.getJSON('https://api.github.com/users/' + username)
      .done(function (data) {
        console.log(data);
        $('.wrapper').html(templete(data));
      })

      .fail(function(request, status, error) {
        console.log('This failed because' + error);

      });
    return false;
  });

});
