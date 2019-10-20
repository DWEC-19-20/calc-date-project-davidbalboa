/* Función que suma o resta un número de dias naturales según 
   el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) {
  var result = new Date(startdate.getFullYear(),startdate.getMonth() -1 ,startdate.getDate() + parseInt(days));
  return new Date(result).toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva
  el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startdate, endDate) {
  let start = new Date(startdate);
  let end = new Date(endDate);
  
  let days = end.getTime() - start.getTime();
  days = Math.round(days/ (1000*60*60*24));
  if (Number.isNaN(days))
      days = "0";
  return days;
}

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startdate, days) {
  var days = parseInt(days);
  //Comprobamos los fines de semana y festivos
  var start = new Date(startdate);
  var end = new Date(startdate.getFullYear(),startdate.getMonth() -1 ,startdate.getDate() + days);
  var loop = new Date(start);
  alert(loop);
  alert(end);
  for (i = 0; i <= days; i++){
    //comprueba fin de semana
    if ((isWeeknd = ([0,6].indexOf(new Date(loop).getDay()) != -1)) == true)
      i--;
    var month = new Date(loop).getMonth() + 1;
    var day = new Date(loop).getDate();
    //comprueba festivos
    //if (check(month, day) != 0)
    //  days -= check(month, day);
    var newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
  }
  alert(days);
  var result = new Date(startdate.getFullYear(),startdate.getMonth(),startdate.getDate() + days);

  return new Date(result).toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas
  */
function getWorkingDays(startdate, endDate) {
    //Almacena la diferencia en milisegundos entre las dos fechas
    var diff = endDate.getTime() - startdate.getTime();
    //Pasa el total del intervalo de las fechas de milisegundos a dias
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    //Devuelve en dias la diferencia entre fechas
    
    //Comprobamos los fines de semana y festivos
    var start = new Date(startdate);
    var end = new Date(endDate);
    var loop = new Date(start);
    while (loop <= end){
      //comprueba fin de semana
      if ((isWeeknd = ([0,6].indexOf(new Date(loop).getDay()) != -1)) == true)
       days--;
      var month = new Date(loop).getMonth() + 1;
      var day = new Date(loop).getDate();
      //comprueba festivos
      if (check(month, day) != 0)
        days -= check(month, day);
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
    }
    return days;
}

/* Comprueba festivos */
function check(month, day){
  if (month == 1 && day == 1)
   return 1;
  if (month == 1 && day == 6)
    return 1;
  if (month == 5 && day == 1)
    return 1;
  if (month == 8 && day == 15)
    return 1;
  if (month == 10 && day == 12)
    return 1;
  if (month == 11 && day == 1)
    return 1;
  if (month == 12 && day == 6)
    return 1;
  if (month == 12 && day == 8)
    return 1;
  if (month == 12 && day == 25)
    return 1;
  return 0;
}