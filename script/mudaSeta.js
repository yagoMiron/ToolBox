function mudaSeta(direcao) {
    const setaDireita = document.querySelector('#setaDireita');
    const setaEsquerda = document.querySelector('#setaEsquerda');
    const setaEscolhida = document.querySelector(`#seta${direcao}`);

    const classDireita = setaDireita.attributes["class"];
    const classEsquerda = setaEsquerda.attributes["class"];
    const classEscolhida = setaEscolhida.attributes["class"];

    classDireita.nodeValue = "opaco";
    classEsquerda.nodeValue = "opaco";
    classEscolhida.nodeValue = "";

}