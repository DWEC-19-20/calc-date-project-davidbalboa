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
  var start = new Date(startdate.getFullYear(), startdate.getMonth() -1, startdate.getDate());
  var end = new Date(endDate.getFullYear(), endDate.getMonth() -1, endDate.getDate());
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


/*function calcWorkingDate(startdate, days) {
  let fecha, fechaFinal, diasFestivos = 0;
  fecha = new Date (startdate);
  fechaFinal = calcDate(startdate, days);
  fechaFinal = fechaFinal.split("/");
  fechaFinal = new Date(fechaFinal[2], fechaFinal[1]-1, fechaFinal[0]);
  for (let i = 0; i <= Math.abs(days); i++){
    if (check(fechaFinal[1] - 1, fechaFinal[0]) && i!=0){
      diasFestivos++;
      i--;
    }
    if (days > 0)
      fecha.setDate(fecha.getDate()+1);
    else
      fecha.setDate(fecha.getDate()-1);
  }
  if (days > 0)
    fechaFinal.setDate(fechaFinal.getDate()+diasFestivos);
  else
    fechaFinal.setDate(fechaFinal.getDate()-diasFestivos);
  return fechaFinal.toLocaleDateString("es-ES");
} */

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
  for (let i = -1; i <= days; i++){
    console.log("dia: " + sdate.getDay());
    if (sdate.getDay() == 6 ){
      console.log("               sabado");
      days--;
    }
    if (sdate.getDay() == 0) {
      console.log("               domingo");
      days--;
    }
    else if (check(sdate.getMonth() - 1, sdate.getDate()) != 0)
      days--;
    sdate.setDate(sdate.getDate() + 1);
    console.log(sdate.toLocaleDateString("es-ES"));
    console.log("days: " + days);
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