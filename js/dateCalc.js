/* Función que suma o resta un número de dias naturales según 
   el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) {
    var result = new Date(startdate.getFullYear(), startdate.getMonth() - 1, startdate.getDate() + parseInt(days));
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

    const oneDay = 1000 * 60 * 60 * 24;

    const start = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    const end = Date.UTC(startdate.getFullYear(), startdate.getMonth(), startdate.getDate());

    return (start - end) / oneDay;
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
    for (let i = 1; i <= days; i++) {
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

    var sdate = new Date(startdate.getFullYear(), startdate.getMonth() - 1, startdate.getDate());
    var edate = new Date(endDate.getFullYear(), endDate.getMonth() - 1, endDate.getDate());

    console.log("Fecha inicial: " + sdate.toLocaleDateString("es-ES") + " " + "fecha final:" + edate.toLocaleDateString("es-ES"));

    var days = getDays(sdate, edate) + 1; //REVISAR No devuelve bien la fecha entre 25/11 y 1/12
    var cont = 0;

    for (let i = 0; i < days; i++) {
        //console.log("dia: " + sdate.getDay());
        console.log(sdate.toLocaleDateString("es-ES"));
        if (sdate.getDay() == 6) {
            cont++;
            console.log("       " + cont + "         sabado");
        }
        if (sdate.getDay() == 0) {
            cont++;
            console.log("      " + cont + "          domingo");
        }
        if (check(sdate.getMonth() + 1, sdate.getDate()) != 0) {
            cont++;
            console.log("       " + cont + "        festivo");
        }
        if (check(sdate.getMonth() + 1, sdate.getDate()) != 0 && sdate.getDay() == 0 || check(sdate.getMonth() + 1, sdate.getDate()) != 0 && sdate.getDay() == 6) {
            cont -= 2;
            console.log("      " + cont + "         resta 2 por S o D o F");
        }

        sdate.setDate(sdate.getDate() + 1);
        console.log("days: " + days);
    }
    days -= cont;

    return days;
}

/* Comprueba festivos */
function check(month, day) {
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