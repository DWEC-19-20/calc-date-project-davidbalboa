/* eventos para el color */
document.getElementById("countbutt").style.borderBottomColor = "rgb(28, 109, 201)";

/* Count Days */
document.getElementById("calcCount").addEventListener("click", function() {
    var sD = document.getElementById("startCount").value;
    var eD = document.getElementById("endCount").value;
    sD = sD.split('-');
    eD = eD.split('-');
    var resultado = getDays(new Date(sD[0], sD[1] , sD[2]), new Date(eD[0], eD[1] , eD[2]));
    document.getElementById("resultCD").innerText = "Days: " + resultado;
});

/* Add Days */
document.getElementById("calcAdd").addEventListener("click", function (){
    var sD = document.getElementById("startAdd").value;
    var days = document.getElementById("daysAdd").value;
    sD = sD.split('-');
    var resultado = calcDate(new Date(sD[0], sD[1], sD[2]), days);
    document.getElementById("resultAD").innerText = "New Date: " + resultado;
});

/* Workdays */
document.getElementById("calcWork").addEventListener("click", function() {
    var sD = document.getElementById("startWork").value;
    var eD = document.getElementById("endWork").value;
    sD = sD.split('-');
    eD = eD.split('-');
    var resultado = getWorkingDays(new Date(sD[0], sD[1] , sD[2]), new Date(eD[0], eD[1] , eD[2]));
    document.getElementById("resultWD").innerText = "Days: " + resultado;
});

/* Add Workdays */
document.getElementById("calcAddWork").addEventListener("click", function (){
    var sD = document.getElementById("startAddWork").value;
    var days = document.getElementById("daysAddWork").value;
    sD = sD.split('-');
    var resultado = calcWorkingDate(new Date(sD[0], sD[1], sD[2]), days);
    document.getElementById("resultAWD").innerText = "New Date: " + resultado;
});

/* 
###############################################
################### Menu ######################
################################################ 
*/
document.getElementById("countbutt").addEventListener('click', function () {
    tab("countDays", "countbutt");
});

document.getElementById("addbutt").addEventListener('click', function () {
    tab("addDays", "addbutt");
});

document.getElementById("workbutt").addEventListener('click', function () {
    tab("workdays", "workbutt");
});

document.getElementById("addworkbutt").addEventListener('click', function () {
    tab("addWorkdays", "addworkbutt");
});

function tab(name, but) {
    var x = document.getElementsByClassName("days");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(name).style.display = "block";

    document.getElementById("countbutt").style.borderBottomColor = "white";
    document.getElementById("addbutt").style.borderBottomColor = "white";
    document.getElementById("workbutt").style.borderBottomColor = "white";
    document.getElementById("addworkbutt").style.borderBottomColor = "white";

    document.getElementById(but).style.borderBottomColor = "rgb(28, 109, 201)";
}

/* 
##################################################
################### Today ########################
##################################################
*/

document.getElementById("todayC1").addEventListener('click', function () {
    document.getElementById("startCount").value = today();
});

document.getElementById("todayC2").addEventListener('click', function () {
    document.getElementById("endCount").value = today();
});

document.getElementById("todayC3").addEventListener('click', function () {
    document.getElementById("startAdd").value = today();
});

document.getElementById("todayC4").addEventListener('click', function () {
    document.getElementById("startWork").value = today();
});

document.getElementById("todayC5").addEventListener('click', function () {
    document.getElementById("endWork").value = today();
});

document.getElementById("todayC6").addEventListener('click', function () {
    document.getElementById("startAddWork").value = today();
});

function today(){
    var date = new Date();
    return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
}




