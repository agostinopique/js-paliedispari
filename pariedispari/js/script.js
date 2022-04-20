/* 
    Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
    Bonus: L’inserimento avviene tramite un campo input

    1. Chiedo all'utente di scegliere pari o dispari
    2. Chiedo all'utente di inserire un numero tra 1 e 5
    3. Creo una funzione che estrae un numero casuale tra 1 e 5 per la macchina
    4. Creo una funzione che somma i due numeri e ritorna un booleano variabile a seconda del risultato del controllo
    5. Dichiaro il risultato del controllo e dunque il vincitore
*/

// versione con i prompt

const pariDispari = prompt('Pari o dispari').toLowerCase();

console.log(pariDispari);

const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

const submit = document.getElementById('submit');

let flag = true;

while (flag) {

    if(isNaN(userNumber)){

        alert('Inserisci un numero!')

    } else if(userNumber > 5) {

        alert('Inserisci un numero tra 1 e 5')

    } else if(userNumber < 1){

        alert('Inserisci un numero maggiore di 1')

    } else {
        
        flag = false;

    }
}

console.log(userNumber);


const machineNum = randomNum(1, 5); 

console.log(machineNum);

function randomNum(min, max) {

    return Math.ceil(Math.random() * (max - min - 1) + min);

}

console.log(winner(userNumber, machineNum));



function winner(userNumber, machineNum) {
    
    const sum = userNumber + machineNum;
    
    let result;

    if(sum % 2){
        
        result = 'dispari';

    } else {

        result = 'pari';

    }

    return result;

}   

if(winner(userNumber, machineNum) === pariDispari) {

    submit.innerHTML = 'Vince Pari';

} else {

    submit.innerHTML = 'Vince dispari';

}