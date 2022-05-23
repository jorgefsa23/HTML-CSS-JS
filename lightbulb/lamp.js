const TurnOn = document.getElementById('TurnOn');
const TurnOff = document.getElementById('TurnOff');
const Lamp = document.getElementById('lamp');

function isBroken(){
    return Lamp.src.indexOf ('lampBroken') > -1 //-1 = false, IF >-1 Broken was found
}

function lampOn(){
    if (!isBroken()){
        Lamp.src = './img/lampOn.jpg';
    }
}
function lampOff(){
    if (!isBroken()){
        Lamp.src = './img/lampOff.jpg';
    }
}
function lampBroken(){
    Lamp.src = './img/lampBroken.jpg';
}

TurnOn.addEventListener('click' , lampOn);
TurnOff.addEventListener('click', lampOff);
Lamp.addEventListener('mouseover', lampOn);
Lamp.addEventListener('mouseleave', lampOff);
Lamp.addEventListener('dblclick', lampBroken);