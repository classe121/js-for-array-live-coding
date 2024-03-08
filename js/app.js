/**
 * Chiedere un numero all'utente tramite prompt
 * Stampare la somma di tutte le cifre che compongono il numero
 */

const stringNumbers = prompt('inserisci un numero a più cifre'); // string
console.log(stringNumbers);

let somma = 0; // number

for (let i = 0; i < stringNumbers.length; i += 1) {
    let number = parseInt(stringNumbers[i]); // number
    somma = somma + number; // number
    console.log(`Cifra in posizione ${i} ${stringNumbers[i]}`);
}
console.log(`Totale somma delle cifre inserite dall'utente: ${somma}`);

/**
 * Chiedere all'utente due parole
 * Stampare prima quella più corta e poi quella più lunga
 */

const parola1 = prompt("inserisci parola 1"); // string
const parola2 = prompt("inserisci parola 2"); // string

console.log("Lunghezza parola 1", parola1.length);
console.log("Lunghezza parola 2", parola2.length);

const lunghezzaParola1 = parola1.length; // number
const lunghezzaParola2 = parola2.length; // number

if (lunghezzaParola1 > lunghezzaParola2) {
    console.log(`${parola2} ${parola1}`);
} else if (lunghezzaParola1 < lunghezzaParola2) {
    console.log(`${parola1} ${parola2}`);
} else {
    console.log("sono lunghe uguali");
}

/**
 * Dato un array di numeri interi, stampare la somma di tutti i numeri
 */

const numbers = [1, 4, 5, 7, 9]; // array[number]

let totale = 0; // number

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]; // number

    // totale += number
    totale = totale + number; // number
}

console.log(`Somma dei numeri presenti nell'array: ${totale}`);