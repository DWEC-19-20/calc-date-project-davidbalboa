/* Función que suma o resta un número de dias naturales según 
   el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) {
    var result = new Date(startdate.getFullYear(), startdate.getMonth() - 1, (startdate.getDate() + parseInt(days)));
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
    console.log("fecha: " + sdate.toLocaleDateString("es-ES"));

    for (let i = 1; i <= days; i++) {
        console.log("         Dia mas: " + i + " DIA: " + sdate.getDate() + "    " + sdate.toLocaleDateString("es-ES"));
        sdate.setDate(sdate.getDate() + 1);

        if (check(sdate.getMonth() + 1, sdate.getDate()) != 0) {
            sdate.setDate(sdate.getDate() + 1);
            console.log("       " + days + "        festivo");
        }

        if (sdate.getDay() === 6) {
            console.log("                 findesemana sabado");
            sdate.setDate(sdate.getDate() + 2);

        }
        if (sdate.getDay() === 0) {
            console.log("                 findesemana domingo");
            sdate.setDate(sdate.getDate() + 1);

        }
    }
    return sdate.toLocaleDateString("es-ES");
}

function getWorkingDays(startdate, endDate) {

    var sdate = new Date(startdate.getFullYear(), startdate.getMonth() - 1, startdate.getDate());
    var edate = new Date(endDate.getFullYear(), endDate.getMonth() - 1, endDate.getDate());

    console.log("Fecha inicial: " + sdate.toLocaleDateString("es-ES") + " " + "fecha final:" + edate.toLocaleDateString("es-ES"));

    var days = getDays(sdate, edate) + 1;
    console.log("days: " + days);
    let aux;
    for (var i = 0; i < days; i++) {
        aux = days;
        console.log(sdate.toLocaleDateString("es-ES"));
        console.log("i:" + i);
        days = excluir(sdate, days);

        if (aux == days + 1)
            i--;

        sdate.setDate(sdate.getDate() + 1);
    }

    return days;
}

function excluir(sdate, days) {

    if (sdate.getDay() == 6) {
        days--;
        console.log("       " + days + "         sabado");
    }
    if (sdate.getDay() == 0) {
        days--;
        console.log("      " + days + "          domingo");
    }
    if (check(sdate.getMonth() + 1, sdate.getDate()) != 0) {
        days--;
        console.log("       " + days + "        festivo");
    }
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