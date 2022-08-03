function win94() {
    var dmg = document.getElementById('dam');
    dmg.style.width = '66' + '%';
    document.getElementById('dam_m').textContent = "전투력 : 66";
    
    var spd = document.getElementById('spd');
    spd.style.width = '11' + '%';
    document.getElementById('spd_m').textContent = "탄속 : 11";

    var tan = document.getElementById('tan');
    tan.style.width = '8' + '%';
    document.getElementById('tan_m').textContent = "장탄 수 : 8";

    var hth = document.getElementById('hth');
    hth.style.width = '30' + '%';
    document.getElementById('hth_m').textContent = "안전성 : 30";
    
    document.getElementById('srdmrImg').src = "./images/win94.jpg";

    var elems = document.getElementsByClassName('container');
    for(var i = 0; i < elems.length; i+=1) {
        elems[i].style.display = 'block';
}
}

function kar98() {
    var dmg = document.getElementById('dam');
    dmg.style.width = '75' + '%';
    document.getElementById('dam_m').textContent = "전투력 : 75";
    
    var spd = document.getElementById('spd');
    spd.style.width = '4' + '%';
    document.getElementById('spd_m').textContent = "탄속 : 4";

    var tan = document.getElementById('tan');
    tan.style.width = '5' + '%';
    document.getElementById('tan_m').textContent = "장탄 수 : 5";

    var hth = document.getElementById('hth');
    hth.style.width = '68' + '%';
    document.getElementById('hth_m').textContent = "안전성 : 68";
    
    document.getElementById('srdmrImg').src = "./images/kar98.jpg";

    var elems = document.getElementsByClassName('container');
    for(var i = 0; i < elems.length; i+=1) {
        elems[i].style.display = 'block';
}
}

function M24() {
    var dmg = document.getElementById('dam');
    dmg.style.width = '79' + '%';
    document.getElementById('dam_m').textContent = "전투력 : 79";
    
    var spd = document.getElementById('spd');
    spd.style.width = '5' + '%';
    document.getElementById('spd_m').textContent = "탄속 : 5";

    var tan = document.getElementById('tan');
    tan.style.width = '5' + '%';
    document.getElementById('tan_m').textContent = "장탄 수 : 5";

    var hth = document.getElementById('hth');
    hth.style.width = '62' + '%';
    document.getElementById('hth_m').textContent = "안전성 : 62";
    
    document.getElementById('srdmrImg').src = "./images/m24.jpg";

    var elems = document.getElementsByClassName('container');
    for(var i = 0; i < elems.length; i+=1) {
        elems[i].style.display = 'block';
}
}