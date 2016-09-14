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
      $(element).css('font-size', "16px").css('font-weight', "600").css('text-align', 'center');;
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
    name: "organización",
    description: "Si nos organizamos….. votamos todos. ¿Qué día era la asamblea? ¿Dónde es la fiesta? ¿Cómo hago para….? ¿Dónde me conviene sumarme a aportar al PdR? Todo esto y menos hacemos en organización.",
    email: "partidodelared@gmail.com",
    color: "#169CBF"
  },
  {
    name: "plataformas",
    description: "00010001 0111101. Codeamos soluciones y desencriptamos problemas. que proponen concesionopoly (urls) y enterate. Traducimos las ideas del partido en realidad, todo con una pizca de amor.",
    email: "plataformas@partidodelared.org",
    color: "#EA4040"
  },
  {
    name: "comunicacion",
    description: "Prensa, Videos, Redes, Chistes y Diseño. “Que de la mano de este equipo, las elecciones vamo’ a ganar”.",
    email: "comunicacion@partidodelared.org",
    color: "#169CBF"
  },
  {
    name: "territorio",
    description: "¿Cómo se vinculan el mundo on-line con el off-line? Redes, Intervenciones y Debates. “Con la cabeza en las nubes y los pies en la tierra”",
    email: "territorio@partidodelared.org",
    color: "#30C280"
  },
  {
    name: "financiamiento",
    description: "<strike>Monsanto, Barrick Gold, IBM, Google.</strike> NO, nos autofinanciamos como podemos y como queremos para que nadie nos venga a pedir nada después, porque nuestro voto es nuestro.",
    email: "financiamiento@partidodelared.org",
    color: "#FF9800"
  },
  {
    name: "afiliaciones",
    description: "Sumate Sumate Sumate Sumate Sumate. Necesitamos ser más, 4000 para ser exactos. Así que “paso a paso” vamos caminando.",
    email: "afiliaciones@partidodelared.org",
    color: "#169CBF"
  },
  {
    name: "sinapsis",
    description: "Si dos neuronas no están conectadas, pueden ser geniales pero nunca van a generar un pensamiento colectivo. Sinapsis conecta organizaciónes, ciudadanos y movimientos con un toque de Rock.",
    email: "partidosenred@partidodelared.org",
    color: "#3D395A"
  },
  {
    name: "arte",
    description: "",
    email: "arte@partidodelared.org",
    color: "#169CBF"
  },
  {
    name: "academia",
    description: "",
    email: "academia@partidodelared.org",
    color: "#169CBF"
  },
]
