/* Invocar la ventana emergente por defecto */
//window.open("./html/countdays.html", "calc", "width=400,height=400");

document.getElementById("home").addEventListener('click', function() {
    /* Invocar la ventana emergente al pulsar el boton */
    window.open("./html/countdays.html", "calc", "width=400,height=400");
});

function callGetDays() {
    var sD = document.getElementById("start").value;
    var eD = document.getElementById("end").value;

    console.log(sd + " " + eD);

    document.getElementById("resultCD").innerHTML = getDays(sD, eD);
}