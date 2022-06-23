const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

let colorIndex = 0;
let intervalID = null;

const trafficLigth = (event) => {
    stopAutomatic();
    turnON[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changecolor = () => {
    const availableColors = ['green', 'yellow','red'];
    const color = availableColors[colorIndex];
    turnON[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalID);
}

const turnON = {
    'red': () => img.src ='./img/red.png',
    'yellow': () => img.src ='./img/yellow.png',
    'green': () => img.src ='./img/green.png',
    'automatic': () => intervalID = setInterval(changecolor, 1000),
}

buttons.addEventListener('click', trafficLigth);