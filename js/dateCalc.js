/* Función que suma o resta un número de dias naturales según 
   el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
   ########################## DAVID ###################################
*/
function calcDate(startdate, days) {
    var result = new Date(startdate);
    result.setDate(result.getDate() + days - 31);
    return new Date(result).toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva
  el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
  ########################## CARLOS ###################################
*/
function getDays(startdate, endDate) {
    //Almacena la diferencia en milisegundos entre las dos fechas
    var diff = endDate.getTime() - startdate.getTime();
    //Pasa el total del intervalo de las fechas de milisegundos a dias
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    //Devuelve en dias la diferencia entre fechas
    if (Number.isNaN(days))
      days = "0";
    return days;
}

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
   ########################## DAVID ###################################
*/
function calcWorkingDate(startdate, days) {
    return new Date().toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas
  ########################## CARLOS ###################################
  */
function getWorkingDays(startdate, endDate) {
    return 0;
}