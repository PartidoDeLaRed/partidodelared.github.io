function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function WeekDay(num) {
  switch (num) {
    case 0:
      return 'Dom.';
      break;
    case 1:
      return 'Lun.';
      break;
    case 2:
      return 'Mar.';
      break;
    case 3:
      return 'Mié.';
      break;
    case 4:
      return 'Jue.';
      break;
    case 5:
      return 'Vie.';
      break;
    case 6:
      return 'Sáb.';
      break;
  }
}

function MonthName(num) {
  switch (num) {
    case 0:
      return 'Enero';
      break;
    case 1:
      return 'Febrero';
      break;
    case 2:
      return 'Marzo';
      break;
    case 3:
      return 'Abril';
      break;
    case 4:
      return 'Mayo';
      break;
    case 5:
      return 'Junio';
      break;
    case 6:
      return 'Julio';
      break;
    case 7:
      return 'Agosto';
      break;
    case 8:
      return 'Septiembre';
      break;
    case 9:
      return 'Octubre';
      break;
    case 10:
      return 'Noviembre';
      break;
    case 11:
      return 'Diciembre';
      break;
  }
}
