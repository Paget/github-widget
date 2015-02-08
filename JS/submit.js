$(function() {
  var userData = $('#user-data').html();
  var template = _.template(userData, {variable: 'm'});
  var repoData = $('#repose').html();
  var template2 = _.template(repoData, {variable: 'm'});

  $('.form').submit(function(){
    var username = $('.username-input').val();

    $.getJSON('https://api.github.com/users/' + username)

      .done(function (data) {
        console.log(data);
        $('.wrapper').html(template(data));
        $('.show-repos').click(function() {
          console.log(data.repos_url);
          showRepos(data.repos_url);
        });
      })

      .fail(function(request, status, error) {
        console.log('This failed because' + error);
      });

    return false;
  });

  function showRepos(url) {
    console.log('show me the omony', typeof url);
    $.getJSON(url)
      .done(function (data){
        $('.repos-list').html(template2(data));
      })
    }
});
