const botaoTexto = document.querySelector('#texto');
const inputTexto = document.querySelector('#inputTexto');

const botaoMorse = document.querySelector('#morse');
const inputMorse = document.querySelector('#inputMorse');

botaoTexto.addEventListener('click', () => {
    const texto = inputTexto.value;
    const codigoMorse = traduzParaMorse(texto);
    exibeResultado(codigoMorse, inputMorse);
    mudaSeta("Direita");
})
botaoMorse.addEventListener('click', () => {
    const codigoMorse = inputMorse.value;
    const texto = traduzParaTexto(codigoMorse);
    exibeResultado(texto, inputTexto);
    mudaSeta("Esquerda");
})