$(document).ready(function() {
  var configProfile = {
    "profile": {
      "screenName": 'partidodelared'
    },
    "domId": 'PDRFeed',
    "maxTweets": 50,
    "enableLinks": true,
    "showUser": true,
    "showTime": true,
    "showImages": true,
    "showRetweet": true,
    "showInteraction": true,
    "dataOnly": true,
    "customCallback": LoadTwitterFeed,
    "lang": 'es'
  };
  twitterFetcher.fetch(configProfile);
})

function LoadTwitterFeed(twFeed) {
  $('#twitterFeed').html('');
  for (var i = 0; i < 2; i++) {
    $('#twitterFeed').append('<div id="tw-col-' + i + '" class="columna mitad"></div>')
  }

  var col = 0;
  twFeed.slice(0, 16).forEach(function(item, index) {
    var author = $(item.author);

    var contAuthor = $('<div class="userCont">');
    var userDisplayName = $('<div class="userDisplayName">').html(author.find('span[data-scribe="element:name"]').html());
    var userName = $('<div class="userName">').html(author.find('span[data-scribe="element:screen_name"]').html());
    var elPhoto = author.find('.Avatar[data-scribe="element:avatar"]');
    var userPhoto = $('<div class="userPhoto">').css('background-image', 'url(' + elPhoto.attr('data-src-1x') + ')');

    var post = $('<div class="h5 post">');
    var img = $('<div class="image ' + (item.image == undefined ? 'none' : '') + '">').css('background-image', 'url(' + item.image + ')');

    var contTweet = $('<div class="">');
    var time = $('<div class="time">').html(item.time);
    var text = $('<div class="text">').html(item.tweet);
    var link = $('<a href="' + item.permalinkURL + '" target="_blank"><div class="link">Ir al post</div></a>');

    $('#tw-col-' + col).append(post.append(contAuthor.append(userPhoto).append(userDisplayName).append(userName)).append(img).append(contTweet.append(text).append(time.append(link))));

    col = (col == 1) ? 0 : 1;
  })

  if ($('#twitterFeed').outerHeight() > $('#facebookFeed').outerHeight())
    $('#facebookFeed').height($('#twitterFeed').height());
  else
    $('#twitterFeed').height($('#facebookFeed').height());
}
