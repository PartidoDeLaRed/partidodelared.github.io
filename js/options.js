var calendarOptions = {
  lang: 'es',
  googleCalendarApiKey: 'AIzaSyDQa_Ok8Wf9QA4FPerldxq74vzi62ICUGw',
  events: 'partidodelared@gmail.com',
  handleWindowResize: false,
  headers: calendarHeaders,
  views: calendarViews,
  eventClick: function(event) {
  },
  eventRender: function(event, element) {
    var org = organizers.filter(function(o){ return o.email == event.creator.email })[0];
    $(element).css('background-color', org ? org.color : "#555555");
    if(event.title.indexOf('Asamblea') != -1)
      $(element).css('font-size', "20px").css('font-weight', "600").css('text-align', 'center');;
    $(element).attr('target', '_blank');
  }
}
var calendarHeaders = {
    left:   'month,agendaWeek',
    center: 'title',
    right:  'today prev,next'
}
var calendarViews = {
    agendaWeek: {
        type: 'agenda',
        duration: { days: 7 },
        buttonText: 'Semana'
    },
    basicWeek: {
        type: 'basic',
        duration: {weeks: 2},
        rows: 2,
        buttonText: 'Dos Semanas'
    }
}

var organizers = [
  {
    name: "pdr",
    email: "partidodelared@gmail.com",
    color: "#169CBF"
  },
  {
    name: "plataformas",
    email: "plataformas@partidodelared.org",
    color: "#EA4040"
  },
  {
    name: "comunicacion",
    email: "comunicacion@partidodelared.org",
    color: "#169CBF"
  },
  {
    name: "territorio",
    email: "territorio@partidodelared.org",
    color: "#30C280"
  },
  {
    name: "financiamiento",
    email: "financiamiento@partidodelared.org",
    color: "#FF9800"
  },
  {
    name: "afiliaciones",
    email: "afiliaciones@partidodelared.org",
    color: "#169CBF"
  },
  {
    name: "sinapsis",
    email: "partidosenred@partidodelared.org",
    color: "#3D395A"
  },
]
