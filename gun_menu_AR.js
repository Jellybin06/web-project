
function m4() {
    
    var dmg = document.getElementById('dam');
    dmg.style.width = '41' + '%';
    document.getElementById('dam_m').textContent = "전투력 : 41";
    
    var spd = document.getElementById('spd');
    spd.style.width = '75' + '%';
    document.getElementById('spd_m').textContent = "탄속 : 75";

    var tan = document.getElementById('tan');
    tan.style.width = '30' + '%';
    document.getElementById('tan_m').textContent = "장탄 수 : 30";

    var hth = document.getElementById('hth');
    hth.style.width = '63' + '%';
    document.getElementById('hth_m').textContent = "안전성 : 63";
    
    document.getElementById('arImg').src = "./images/m4al.jpg";

    var elems = document.getElementsByClassName('container');
    for(var i = 0; i < elems.length; i+=1) {
        elems[i].style.display = 'block';
}
}

function m16() {
    var dmg = document.getElementById('dam');
    dmg.style.width = '41' + '%';
    document.getElementById('dam_m').textContent = "전투력 : 41";
    
    var spd = document.getElementById('spd');
    spd.style.width = '15' + '%';
    document.getElementById('spd_m').textContent = "탄속 : 15";

    var tan = document.getElementById('tan');
    tan.style.width = '30' + '%';
    document.getElementById('tan_m').textContent = "장탄 수 : 30";

    var hth = document.getElementById('hth');
    hth.style.width = '61' + '%';
    document.getElementById('hth_m').textContent = "안전성 : 61";
    
    document.getElementById('arImg').src = "./images/m16a4.webp";

    var elems = document.getElementsByClassName('container');
    for(var i = 0; i < elems.length; i+=1) {
        elems[i].style.display = 'block';
}
}
