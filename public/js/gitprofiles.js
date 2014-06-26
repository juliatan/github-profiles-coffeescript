// this is just a reference file, so that I can compare it to the 
// coffeescript file which generates its own javascript file on the fly
// in the javascript folder that only exists for that session in the browser.
// It creates it itself! Amazing!

function getProfile(username) {
  $('.spinner').show();

  $.get('https://api.github.com/users/' + username, function(user){
      var newProfile = Mustache.render($('#profile-template').html(), user);
      $('.profile-container').prepend(newProfile);
      }).error(function(){
    alert("There is no user called " + username);
  }).always(function(){
        $('#username').val('');
        $('.spinner').hide();
      })
}

$(document).ready(function(){

  $('#add_profile').on('submit', function(event){
    event.preventDefault();
    getProfile($('#username').val())
  });
});