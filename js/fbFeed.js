$(document).ready(function() {
  $.get('https://graph.facebook.com/oauth/access_token?client_id=1603109073323307&client_secret=d7be120fd1ca0a5c2572170e6ab4e611&grant_type=client_credentials', function(res, err) {
    $.getJSON('https://graph.facebook.com/v2.7/308788379196113/posts?fields=caption,description,message,full_picture,link,permalink_url,created_time&limit=30&access_token=' + res.split('=')[1], function(json, textStatus) {
      LoadFacebookFeed(json.data);
    });
  })
});

function LoadFacebookFeed(fbFeed) {
  $('#facebookFeed').html('');
  for (var i = 0; i < 2; i++) {
    $('#facebookFeed').append('<div id="fb-col-' + i + '" class="columna mitad"></div>')
  }

  var col = 0;
  fbFeed.slice(0, 10).forEach(function(item, index) {
    var post = $('<div class="h5 post">');
    var img = $('<div class="image">').css('background-image', 'url(' + item.full_picture + ')');;
    var cont = $('<div class="">');
    var fecha = new Date(item.created_time);
    var time = $('<div class="time">').html(WeekDay(fecha.getDay()) + " " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
    var text = $('<div class="text">').html(item.message);
    var link = $('<a href="' + item.permalink_url + '" target="_blank"><div class="link">Ir al post</div></a>');
    $('#fb-col-' + col).append(post.append(img).append(cont.append(text).append(time.append(link))));

    col = (col == 1) ? 0 : 1;
  })

  if ($('#twitterFeed').outerHeight() > $('#facebookFeed').outerHeight())
    $('#facebookFeed').height($('#twitterFeed').height());
  else
    $('#twitterFeed').height($('#facebookFeed').height());
}
