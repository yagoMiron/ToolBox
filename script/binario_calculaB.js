function calculaBinario(decimal) {
    const numeroDeBits = Math.floor(Math.log(decimal) / Math.log(2));
    let numeroBinario = "";
    for (let index = numeroDeBits; index >= 0; index--) {
        if (decimal >= 2 ** index) {
            numeroBinario += '1';
            decimal -= 2 ** index;
        } else {
            numeroBinario += '0';
        }
    }
    return numeroBinario;
}
