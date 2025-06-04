/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluto(nome) {
    return "Ciao " + nome

}

// Invoca la funzione qui e stampa il risultato in console

let Presentazione = saluto(userName)
console.log(Presentazione);

//Risultato atteso se si passa 'Mario': // ciao Mario
