var time;
$(document).ready(function() {

  //Seteo de vision de ciudad
  var maxHeight = 0;
  $('#visionciudad .column-item').each(function() {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  $('#visionciudad .column-item').height(maxHeight);

  //Seteo de equipo
  $('#equipo .list-item').each(function() {
    var el = $(this);
    var org = organizers.filter(function(o){ return o.name === el.data('comision')})[0];
    el.css('background-color', org ? org.color : "#555555");
  });

  //Seteo de calendario
  $('#calendar').fullCalendar(calendarOptions);

  //Seteo de evento de scroll
  time = setInterval(bounceVisionCiudad, 4000);
  CheckScroll();
  $(document).scroll(function(e) {
    CheckScroll();
    var x = $(this).scrollTop();
    $('.parallax-bk').css('background-position', parseInt(x / 6) + 'px')
  });

  //Seteo de evento de resize
  ResizeBoxes();
  $(window).on('resize', function(event) {
    ResizeBoxes();
  });

  //Seteo de fondos de contenedores
  SetBackgrounds();
})

function ResizeBoxes() {
  $('.half-height').each(function() {
    $(this).css('height', ($(this).width()/3*2)+'px');
  });
}

function CheckScroll() {
  var wHeight = $(window).outerHeight();
  if ($(window).scrollTop() > 0) {
    if (!$('#header').hasClass('min')) {
      $('#header').addClass('min');
      clearInterval(time);
    }
  } else {
    if ($('#header').hasClass('min')) {
      $('#header').removeClass('min');
      time = setInterval(bounceVisionCiudad, 4000);
    }
  }
  if ($(window).scrollTop() > ((wHeight / 2))) {
    $('#header').addClass('no-first');
  } else {
    $('#header').removeClass('no-first');
  }
}

function bounceVisionCiudad() {
  var delay = 0;
  $('#visionciudad .columna').each(function(index, el) {
    setTimeout(function() {
      $(el).animate({
        'margin-top': '-300px'
      }, '500ms', function() {
        $(el).animate({
          'margin-top': '0'
        }, '500ms')
      });
    }, delay);
    delay += 1000;
  });
}

function SetBackgrounds() {
  $('.bk.image').each(function(index, el) {
    var el = $(el);
    el.css('background-image', 'url(' + el.data('src') + ')');
  });
}
