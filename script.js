const calcular = document.getElementById(`botao`)


function imc(){
    const nome = document.getElementById(`nome`).value
    const peso = document.getElementById(`peso`).value
    const altura = document.getElementById(`altura`).value
    const resultado = document.getElementById(`resultado`)

    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso/(altura*altura)).toFixed(1)

        let classificacao = '';

        if (valorIMC <18.5){
            classificacao = 'abaixo do peso.'
        }else if (valorIMC <25){
            classificacao = 'com peso ideal. Parabéns!'
        }else if (valorIMC <30){
            classificacao = 'levemente acima do peso'
        }else if (valorIMC <35){
            classificacao = 'com obesidade grau I'
        }else if(valorIMC <40){
            classificacao =  'com obesidade grau II'
        }else{
            classificacao = 'com obesidade grau III. Cuidado!!'

        }


        resultado.textContent = `
            Olá ${nome}! Com ${peso} kg e ${altura} m,
            seu IMC é ${valorIMC}. Atualmente você está ${classificacao}`;


    }else{
        resultado.textContent = 'Preencha todos os campos para calcular seu IMC.'
    }



}

calcular.addEventListener(`click`, imc);
