function traduzParaTexto(morse) {
    // -.-- .- --. --- / ...- . .-. --.. .- ... / -- .. .-. --- -. 
    const arrayPalavraMorse = morse.split('/');
    let acc = "";
    arrayPalavraMorse.forEach((element, index) => {
        const arrayLetraMorse = element.split(' ');
        arrayLetraMorse.forEach(element => {
            switch (element) {
                case ".-":    acc += 'a'; break;
                case "-...":  acc += 'b'; break;
                case "-.-.":  acc += 'c'; break;
                case "-..":   acc += 'd'; break;
                case ".":     acc += 'e'; break;
                case "..-.":  acc += 'f'; break;
                case "--.":   acc += 'g'; break;
                case "....":  acc += 'h'; break;
                case "..":    acc += 'i'; break;
                case ".---":  acc += 'j'; break;
                case "-.-":   acc += 'k'; break;
                case ".-..":  acc += 'l'; break;
                case "--":    acc += 'm'; break;
                case "-.":    acc += 'n'; break;
                case "---":   acc += 'o'; break;
                case ".--.":  acc += 'p'; break;
                case "--.-":  acc += 'q'; break;
                case ".-.":   acc += 'r'; break;
                case "...":   acc += 's'; break;
                case "-":     acc += 't'; break;
                case "..-":   acc += 'u'; break;
                case "...-":  acc += 'v'; break;
                case ".--":   acc += 'w'; break;
                case "-..-":  acc += 'x'; break;
                case "-.--":  acc += 'y'; break;
                case "--..":  acc += 'z'; break;
                case "-----": acc += '0'; break;
                case ".----": acc += '1'; break;
                case "..---": acc += '2'; break;
                case "...--": acc += '3'; break;
                case "....-": acc += '4'; break;
                case ".....": acc += '5'; break;
                case "-....": acc += '6'; break;
                case "--...": acc += '7'; break;
                case "---..": acc += '8'; break;
                case "----.": acc += '9'; break;
                default: break;
            }
        });
        if (arrayPalavraMorse[index+1]) {
            acc += " ";
        }

    });
    return acc;
}