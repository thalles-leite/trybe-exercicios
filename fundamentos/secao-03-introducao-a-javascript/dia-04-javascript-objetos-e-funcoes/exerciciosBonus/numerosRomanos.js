
function convertNumRomanos(numAConv) {
    let splitNum = numAConv.toUpperCase().split("");
    let numConv = 0;

    let tabelaRomanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    for (let i = 0; i < splitNum.length; i += 1) {

        splitNum[i] === "M" ? numConv += tabelaRomanos.M :
            splitNum[i] === "D" ? numConv += tabelaRomanos.D :
                splitNum[i + 1] == "D" ? (numConv += (tabelaRomanos.D - tabelaRomanos.C), i += 1) :
                    splitNum[i] == "C" ? numConv += tabelaRomanos.C :
                        splitNum[i] == "L" ? numConv += tabelaRomanos.L :
                            splitNum[i + 1] == "L" ? (numConv += (tabelaRomanos.L - tabelaRomanos.X), i += 1) :
                                splitNum[i] == "X" ? numConv += tabelaRomanos.X :
                                    splitNum[i] == "V" ? numConv += tabelaRomanos.V :
                                        splitNum[i + 1] == "V" ? (numConv += (tabelaRomanos.V - tabelaRomanos.I), i += 1) :
                                            splitNum[i] == "I" ? numConv += tabelaRomanos.I : "";

    }
    return numConv;
}

console.log(convertNumRomanos("mmmdcxxx"))