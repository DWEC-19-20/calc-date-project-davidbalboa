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
  var start = new Date(startdate.getFullYear(), startdate.getMonth() - 1, startdate.getDate() - 1);
  var end = new Date(endDate.getFullYear(), endDate.getMonth() - 1, endDate.getDate() - 1);
  
  var days = end.getTime() - start.getTime();
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
  var sdate = new Date(startdate.getFullYear(), startdate.getMonth() - 1, startdate.getDate());
  console.log("principio days: " + days);
  console.log("principio sdate: " + sdate.toLocaleDateString("es-ES"));
  for (let i = 1; i <= days; i++){
    if (sdate.getDay() == 6 || sdate.getDay() == 0)
      days++;
    else if (check(sdate.getMonth(), sdate.getDate()) != 0)
      days++;
    console.log("i:" + i + " days: " + days);
    sdate = new Date(sdate.setDate(sdate.getDate() + 1));
    console.log("sdate: " + sdate.toLocaleDateString("es-ES"));
  }
  console.log("final sdate: " + sdate.toLocaleDateString("es-ES"));
  return new Date(sdate).toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas
  */
function getWorkingDays(startdate, endDate) {
  var sdate = new Date(startdate.getFullYear(), startdate.getMonth() -1, startdate.getDate());
  var edate = new Date(endDate.getFullYear(), endDate.getMonth() -1, endDate.getDate());
  var days = getDays(sdate, edate);
  for (let i = 0; i <= days; i++){
    if (sdate.getDay() == 6 || sdate.getDay() == 0){
      days--;
      i--;
    }
    else if (check(sdate.getMonth(), sdate.getDate()) != 0)
      days--;
    sdate = new Date(sdate.setDate(sdate.getDate() + 1));
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
  if (month == 12 && day == 9)
    return 1;
  if (month == 12 && day == 25)
    return 1;
  return 0;
}