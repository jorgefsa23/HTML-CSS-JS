/* CRONÔMETRO */
const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')

let miliNum = 0
let segNum = 0
let minNum = 0
let INTERVALO

function milissegundos() {
    miliNum++
    if (miliNum < 10) {
      miliseg.innerHTML = '0' + miliNum
    } else {
      miliseg.innerHTML = miliNum
    }
  
    if (miliNum == 99) {
      miliNum = 0
      segundos()
    }
  }
  
  function segundos() {
    segNum++
    if (segNum < 10) {
      seg.innerHTML = '0' + segNum
    } else {
      seg.innerHTML = segNum
    }
  
    if (segNum == 59) {
      segNum = 0
      minutos()
    }
  }
  
  function minutos() {
    minNum++
    if (minNum < 10) {
      min.innerHTML = '0' + minNum
    } else {
      min.innerHTML = minNum
    }
}
/* Ligar e parar o CRONÔMETRO */
function iniciar() {
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
      milissegundos()
    }, 10)
  }

function parar() {
    clearInterval(INTERVALO)
  }

/* <<< JOGO >>> */
const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//função para virar carta
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

//função que checa se as cartas são iguais
function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}

//função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

//funcão que desvira as cartas
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

//função que reseta o tabuleiro
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//função que embaralha as cartas
(function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;
    })
})();

//adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});