
const calcular = document.getElementById('calcular');

alert('Informe seus dados e presione em [calcular]');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome.value !=='' && altura!=='' && peso !==''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        resultado.textContent = valorIMC;

        let classificacao = '';

        if (valorIMC < 18.5 ){
            classificacao = 'abaixo do peso';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal. Parabens!';
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso';
        }
        else if(valorIMC < 35){
            classificacao = 'com obecidade grau I !';
        }else if(valorIMC < 40){
            classificacao = 'com obecidade grau II !';
        }else{
            classificacao = 'com obecidade grau III !';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    }else{
        resultado.textContent = 'preencha todos os campos corretamente';
    }

    //alert('Confira seu resultado');
}

calcular.addEventListener('click', imc);


