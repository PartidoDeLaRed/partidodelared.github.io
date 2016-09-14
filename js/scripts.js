var time;
$(document).ready(function() {

  var wWidth = $(window).outerWidth();
  var mobile = wWidth < 600 ? true : false;

  //Handler de menu
  $('nav#menu li.menuitem, #header .logo').click(function(e) {
    e.preventDefault();
    var body = $("html, body");
    var menuitem = $(e.currentTarget);
    var section = $(this).data('section');
    var pos = $('#' + section).offset().top;
    body.stop().animate({
        scrollTop: pos
    }, '500', 'swing', function() {
        document.location.href = document.location.origin + document.location.pathname + '#' + section;
        body.stop().animate({
            scrollTop: pos - $('#header').outerHeight() + 20
        }, '500', 'swing');
    });

    $('.menuitem').removeClass('selected');
    menuitem.addClass('selected');
  });

  var menuOpened = false;
  $('.menuButton').click(function(event) {
    if(!menuOpened)
      $('nav#menu .menuitem').animate({'height': '48px'}, 100);
    else
      $('nav#menu .menuitem').animate({'height': '0px'}, 100);
    menuOpened = !menuOpened;
  });


  //Seteo de vision de ciudad
  var maxHeight = 0;
  $('#visionciudad .column-item').each(function() {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  $('#visionciudad .column-item').height(maxHeight);

  //Seteo de equipo
  shuffle(organizers).forEach(function(org) {
    $('#equipoContenedor').append(
      $('<div class="columna tercio pad20">'+
        '<div class="list-item half-height horizontal-center vertical-center font-color-white" data-comision="'+org.name+'" style="border-color:'+org.color+'">'+
          '<div>'+
            '<div class="h2 bold all-caps">'+org.name+'</div>'+
            '<separador class="diez"></separador>'+
            '<div class="h4">'+org.description+'</div>'+
          '</div>'+
        '</div>'+
      '</div>')
    );
  });

  //Seteo de calendario
  $('#calendar').fullCalendar(calendarOptions);
  setTimeout(function(){
    if(mobile)
      $('#calendar').fullCalendar('changeView', 'agendaDay');
  }, 1000);

  //Seteo de evento de scroll
  time = setInterval(bounceVisionCiudad, 4000);
  CheckScroll();
  $(document).scroll(function(e) {
    CheckScroll();
    var x = $(window).scrollTop();
    //$('.parallax-bk').css('background-position', 'center ' + (-($(window).outerHeight()/2.2) + parseInt(x / 6)) + 'px')
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
  if ($(window).scrollTop() >= $()) {
    clearInterval(time);
  } else {
    time = setInterval(bounceVisionCiudad, 4000);
  }
  if ($(window).scrollTop() >= $(window).outerHeight()/10*9) {
    $('#header').addClass('position-fixed');
    $('nav#menu .button').removeClass('no-width');
    if($('#portada').hasClass('height-almost-full'))
      $('#portada').removeClass('height-almost-full').addClass('height-full');
  } else {
    $('#header').removeClass('position-fixed');
    $('nav#menu .button').addClass('no-width');
    if($('#portada').hasClass('height-full'))
      $('#portada').addClass('height-almost-full').removeClass('height-full');
  }
}

function bounceVisionCiudad() {
  // var delay = 0;
  // $('#visionciudad .columna').each(function(index, el) {
  //   setTimeout(function() {
  //     $(el).animate({
  //       'margin-top': '-300px'
  //     }, '500ms', function() {
  //       $(el).animate({
  //         'margin-top': '0'
  //       }, '500ms')
  //     });
  //   }, delay);
  //   delay += 1000;
  // });
}

function SetBackgrounds() {
  $('.bk.image').each(function(index, el) {
    var el = $(el);
    el.css('background-image', 'url(' + el.data('src') + ')');
  });
}
