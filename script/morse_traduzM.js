function traduzParaMorse(texto) {
    texto = texto.toLowerCase();
    const arrayTexto = texto.split('');
    let acc = '';
    arrayTexto.forEach(element => {
        switch (element) {
            case "a": acc += ".- ";    break;
            case "b": acc += "-... ";  break;
            case "c": acc += "-.-. ";  break;
            case "d": acc += "-.. ";   break;
            case "e": acc += ". ";     break;
            case "f": acc += "..-. ";  break;
            case "g": acc += "--. ";   break;
            case "h": acc += ".... ";  break;
            case "i": acc += ".. ";    break;
            case "j": acc += ".--- ";  break;
            case "k": acc += "-.- ";   break;
            case "l": acc += ".-.. ";  break;
            case "m": acc += "-- ";    break;
            case "n": acc += "-. ";    break;
            case "o": acc += "--- ";   break;
            case "p": acc += ".--. ";  break;
            case "q": acc += "--.- ";  break;
            case "r": acc += ".-. ";   break;
            case "s": acc += "... ";   break;
            case "t": acc += "- ";     break;
            case "u": acc += "..- ";   break;
            case "v": acc += "...- ";  break;
            case "w": acc += ".-- ";   break;
            case "x": acc += "-..- ";  break;
            case "y": acc += "-.-- ";  break;
            case "z": acc += "--.. ";  break;
            case "0": acc += "----- "; break;
            case "1": acc += ".---- "; break;
            case "2": acc += "..--- "; break;
            case "3": acc += "...-- "; break;
            case "4": acc += "....- "; break;
            case "5": acc += "..... "; break;
            case "6": acc += "-.... "; break;
            case "7": acc += "--... "; break;
            case "8": acc += "---.. "; break;
            case "9": acc += "----. "; break;
            case " ": acc += "/ ";     break;
            default:                   break;
        }
    });
    return acc;
}