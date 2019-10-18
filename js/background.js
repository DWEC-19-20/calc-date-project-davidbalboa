
document.getElementById("calcula").addEventListener('click', function() {
    var sD = document.getElementById("start").value;
    var eD = document.getElementById("end").value;
    sD = sD.split('-');
    eD = eD.split('-');
    var resultado = getDays(new Date(sD[0], sD[1] -1 , sD[2]), new Date(eD[0], eD[1] -1 , eD[2]));
    document.getElementById("resultCD").innerText = resultado;
});
