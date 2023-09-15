// conversor Binário em Decimal
const botaoBparaD = document.querySelector('#binario');
const inputBparaD = document.querySelector('#inputBinario');

// conversor Decimal em Binario
const botaoDparaB = document.querySelector('#decimal');
const inputDparaB = document.querySelector('#inputDecimal');

botaoBparaD.addEventListener('click', () => {
    const valorBinario = inputBparaD.value;
    const valorDecimal = calculaDecimal(valorBinario);
    exibeResultado(valorDecimal, inputDparaB);
    mudaSeta("Direita");
})
botaoDparaB.addEventListener('click', () => {
    const valorDecimal1 = inputDparaB.value;
    const valorBinario1 = calculaBinario(valorDecimal1);
    exibeResultado(valorBinario1, inputBparaD);
    mudaSeta("Esquerda");
})

/*
const botao = document.querySelectorAll('.botao')
const input = document.querySelectorAll('.input')

console.log(input[0])

botao.addEventListener('click', () => {
    const valor = input[botao.alt].value
    console.log(valor)

})
*/