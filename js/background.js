/* eventos para cuando se hace click sobre el boton de calcular */

/* Count Days */
document.getElementById("calcCount").addEventListener("click", function() {
    var sD = document.getElementById("startCount").value;
    var eD = document.getElementById("endCount").value;
    sD = sD.split('-');
    eD = eD.split('-');
    var resultado = getDays(new Date(sD[0], sD[1] -1 , sD[2]), new Date(eD[0], eD[1] -1 , eD[2]));
    document.getElementById("resultCD").innerText = "Days: " + resultado;
});

/* Add Days */
document.getElementById("calcAdd").addEventListener("click", function (){
    var sD = document.getElementById("startAdd").value;
    var days = document.getElementById("daysAdd").value;
    sD = sD.split('-');
    var resultado = calcDate(new Date(sD[0], sD[1] -1 , sD[2]), days);
    document.getElementById("resultAD").innerText = "New Date: " + resultado;
});

/* Workdays */
document.getElementById("calcWork").addEventListener("click", function() {
    var sD = document.getElementById("startWork").value;
    var eD = document.getElementById("endWork").value;
    sD = sD.split('-');
    eD = eD.split('-');
    var resultado = getWorkingDays(new Date(sD[0], sD[1] -1 , sD[2]), new Date(eD[0], eD[1] -1 , eD[2]));
    
    document.getElementById("resultWD").innerText = "Days: " + resultado;
});

/* 
###############################################
################### Menu ######################
################################################ 
*/
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




