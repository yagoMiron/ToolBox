function calculaDecimal(binario) {
    binario = String(Number(binario)) // elimina espaços e quebras de linha
    const arrayBinario = binario.split('');
    const arrayBitConvertido = arrayBinario.map((element, index) =>
        2 ** (arrayBinario.length - 1 - index) * element
    );
    const resultado = arrayBitConvertido.reduce((acc, atual) =>
        acc + atual
    );
    return resultado;
}