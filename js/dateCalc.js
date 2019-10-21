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
  var aux = days;
  var date = new Date(startdate.getFullYear(), startdate.getMonth() - 1, startdate.getDate());
  for (var i = 0; i < aux; i++) {
    if (date.getDay() == 6 || date.getDay() == 0)
      aux++;
    //if (check(month, day) != 0)
    //  days -= check(month, day);
    console.log(i);
    console.log(aux);
    console.log(date.toLocaleDateString("es-ES"));
    date = new Date(date.setDate(date.getDate() + 1));
  }
  return new Date(date).toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas
  */
function getWorkingDays(startdate, endDate) {
    var days = getDays(startdate, endDate);
    for (var i = 0; i <= days; i++){
      if (startdate.getDay() == 6 || startdate.getDay() == 0){
        days--;
        i--;
      }
      //if (check(month, day) != 0)
      //  days -= check(month, day);
      console.log(i);
      console.log(days);
      console.log(startdate.toLocaleDateString("es-ES"));
      loop = new Date(startdate.setDate(startdate.getDate() + 1));
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