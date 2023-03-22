// numero di chilometri che l'utente vuole percorrere
// età passeggero
// sconto 20% ai minorenni
// sconto 40% per gli over 65
//  prezzo finale  messo fuori in forma umana



let km = prompt("quanti chilometri devi percorrere?");
console.log (km);

let eta = prompt("qual'è la tua eta");
console.log (eta);

let prezzo_finale = km * 0.21;



// prezzo biglietti



if (eta < 18){
    prezzo_finale = prezzo_finale - (prezzo_finale * 0.20 ).toFixed(1);
}
else if (eta > 65){
    prezzo_finale = prezzo_finale -  (prezzo_finale * 0.40).toFixed(1);
}

console.log (prezzo_finale);

let biglietto = prezzo_finale;


document.writeln `${biglietto}`;