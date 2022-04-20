/* 

    Palidroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
    Bonus: L’inserimento avviene tramite un campo input

    1. Chiedo all'utente di inserire una parola;
    2. Creo una funzionne che paragona le lettere della prima metá con la seconda metá, partendo dai lati opposti della parola;
    3. Creo un flag con valore true di base: se la parola é palindroma, resta true, sennò diventa false;
    4. Stampo a schermo il risultato del controllo;
 */


// BONUS CON INPUT IN HTML
/* 
let parolaInserita;
document.getElementById('submit').addEventListener('click', function(){
    parolaInserita = document.getElementById('input').value;
}) 
 */

//  Chiedo una parola all'utente
 const parolaInserita = prompt('Inserisci una parola').toLocaleLowerCase(); 

console.log('Stringa', parolaInserita);

console.log('function result', palindrome(parolaInserita));

function palindrome(string){
    
    // controllo che l'utente abbia inserito una parola
    if(!(isNaN(parolaInserita))) {
        alert('Inserisci una parola');
    } 
    
    // flag di controllo per la verifica del palindromo
    let paliFlag  = true;


    // ciclo che controlla il palindromo
    for(let i = 0; i < parolaInserita.length; i++){

        // confronto i primi caretteri con gli ultimi 
        if(parolaInserita.charAt(i) != parolaInserita.charAt(parolaInserita.length-i-1)){

            paliFlag = false;

        } else {

            paliFlag = true;

        }

    } 
    
    return paliFlag;

}