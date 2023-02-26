const btnSubtracao = document.querySelector('#btn1');
const btnSoma = document.querySelector('#btn2');
const displayNumber = document.querySelector('#number')
const btnEnviar = document.querySelector('#send');
const btnReset = document.querySelector('#reset');

let contador = 0;

btnSoma.addEventListener('click', soma);
btnSubtracao.addEventListener('click', subtracao);

document.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowUp') {
        if (contador < 999999) {
            soma();
        }

    }

    if (e.key === 'ArrowDown') {
        if (contador < 999999) {
            subtracao();
        }

    }
});

btnReset.addEventListener('click', () => {

    contador = 0;
    displayNumber.textContent = '000000';
    displayNumber.style.color = '#000';
    btnReset.disabled = true;



});

btnEnviar.addEventListener('click', (e) => {

    e.preventDefault();

    let number = document.querySelector('#input-number');
    const value = number.value;
    contador = value;

    if (number.value.length > '6') {
        alert('Número inválido');
        contador = 0;
    } else if (contador >= 0) {
        displayNumber.style.color = '#000';
        displayNumber.textContent = formatSoma(value);
        btnReset.disabled = false;
        number.value = '';
    } else if (contador < 0) {
        displayNumber.style.color = '#c30514';
        displayNumber.textContent = formatSoma(value);
        btnReset.disabled = false;
        number.value = '';
    }


});

function soma() {

    if (contador < 999999) {
        contador++;
        displayNumber.textContent = formatSoma(contador);
        btnReset.disabled = false;
    }


    if (contador >= 0) {
        displayNumber.style.color = '#000';
    }

}

function subtracao() {
    if (contador > -99999) {
        contador--;
        displayNumber.textContent = formatSubtracao(contador);
        btnReset.disabled = false;
    }

    if (contador < 0) {
        displayNumber.style.color = '#c30514';
    }

}

function formatSoma(numbers) {
    return numbers < 999999 ? `${numbers}`.padStart(6, "0") : numbers;
}

function formatSubtracao(numbers) {
    return numbers > -999999 ? `${numbers}`.padStart(6, "0") : numbers;
} 