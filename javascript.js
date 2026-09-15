

console.log('Olá, seja bem-vindo(a) à página de Dragon Ball!');


const botaoSaga = document.querySelector('#abrir-saga');
const saga = document.querySelector('.saga');

botaoSaga.addEventListener('click', (event) => {
    event.preventDefault();
    saga.classList.add('ativo');

})

saga.addEventListener('click', (event) => {
    if (event.target === saga) {
        saga.classList.remove('ativo');
    }

    });