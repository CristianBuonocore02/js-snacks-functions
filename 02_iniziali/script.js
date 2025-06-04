/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const namesDue = ["Artur", "Luca", "Marco", "Umberto", "Giovanni", "Cristian"];


// Invoca la funzione qui e stampa il risultato in console
let parolestaccate = InizialiParole(names)
let parolestaccate2 = InizialiParole(namesDue)

console.log(parolestaccate);
console.log(parolestaccate2);


// Dichiara la funzione qui.
function InizialiParole(array_names) {
    const iniziali = [];

    for (let i = 0; i < array_names.length; i++) {
        // console.log(array_names[i][0]);
        iniziali.push(array_names[i][0])
    }

    return iniziali;
}
// const primeLettere = iniziali.map(stringa => stringa.slice(0, 1));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]