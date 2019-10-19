/* Invocar la ventana emergente por defecto */
window.onload = function() {
    window.open("calc.html", "calc", "width=400,height=400");
    window.onload("stop");
}

//var home = document.getElementById("home");
//home.onclick = function() {
    /* Invocar la ventana emergente al pulsar el boton */
//    window.open("./html/countdays.html", "calc", "width=450,height=325");
//}

document.getElementById("countbutt").addEventListener('click', function () {
    tab("countDays");
});

document.getElementById("addbutt").addEventListener('click', function () {
    tab("addDays");
});

document.getElementById("workbutt").addEventListener('click', function () {
    tab("workdays");
});

document.getElementById("addworkbutt").addEventListener('click', function () {
    tab("addWorkdays");
});

function tab(name) {
  var i;
  var x = document.getElementsByClassName("days");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(name).style.display = "block";
}
