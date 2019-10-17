/* Invocar la ventana emergente por defecto */
document.addEventListener('pageshow', function () {
    /* Invocar la ventana emergente al pulsar el boton */
    window.open("./html/countdays.html", "calc", "width=400,height=400");
});

document.getElementById("home").addEventListener('click', function () {
    /* Invocar la ventana emergente al pulsar el boton */
    window.open("./html/countdays.html", "calc", "width=400,height=400");
});

document.getElementById("botClose").addEventListener('click', function () {
    /* Invocar la ventana emergente al pulsar el boton */
    calc.close();
});