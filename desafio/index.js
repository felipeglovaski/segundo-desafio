
function calculoDeRanqueDoHeroi(vitoria, derrota) {
    const resultado = vitoria - derrota
    let ranque

    if (resultado < 10) {
        ranque = "Ferro";
    } else if (resultado <= 20) {
        ranque = "Bronze";
    } else if (resultado <= 50) {
        ranque = 'Prata';
    } else if (resultado <= 80) {
        ranque = "Ouro";
    } else if (resultado <= 90) {
        ranque = "Diamante";
    } else if (resultado <= 100) {
        ranque = "Lendário";
    } else {
        ranque = "Imortal"
    }

    console.log("O Herói tem o saldo de " + resultado + " e esta no ranque " + ranque)
    
    
}

calculoDeRanqueDoHeroi(80, 10)



