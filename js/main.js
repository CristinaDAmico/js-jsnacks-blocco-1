/************************************
             SNACK 1
************************************/

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

var richieste = 5;
var somma = 0;

//for
for( var i = 1; i <= richieste; i++ ) {
    var numero = parseInt(prompt('Inserisci numero ' + i + ' di ' + richieste));
    console.log(numero);

    somma += numero;
}

console.log('TOT: ',somma);

//while
var counter = 1;

while( counter <= richieste ) {
    var numero = parseInt(prompt('Inserisci numero ' + counter + ' di ' + richieste));
    console.log(numero);

    somma += numero;

    counter++;
}

console.log('TOT: ',somma);



/************************************
             SNACK 2
************************************/

// Inserisci un numero. 
// Se è pari stampa il numero. 
// Se è dispari stampa il numero successivo.

var numero = parseInt(prompt('Inserisci un numero'));

if (numero % 2 === 0) {
    console.log(numero);
} else {
    console.log(numero + 1);
    //console.log(++numero); 2 scrittura
}



/************************************
             SNACK 3
************************************/

// Generatore di “nomi cognomi” casuali: 
// Prepara una lista di nomi.
// Prepara una lista di cognomi.
// Genera una falsa lista di 3 invitati.

var nomi = ['Cristina', 'Paolo', 'Fabio', 'Lorenzo', 'Roberta'];
console.log(nomi);

var cognomi = ['Fontana', 'Rossi', 'Conte', 'Bianchi', 'Verdi'];
console.log(cognomi);

var listaNomi = [];

//for
for (var i = 0; i < 3; i++) {
    // genero index per nomi
    var randomNomi = Math.floor(Math.random() * nomi.length);
    console.log(randomNomi);

    // genero index per cognomi
    var randomCognomi = Math.floor(Math.random() * cognomi.length);
    console.log(randomCognomi);

    // genero il mio full name
    var nuovoNome = nomi[randomNomi] + ' ' + cognomi[randomCognomi];

    // add to guest
    listaNomi.push(nuovoNome);
}

console.log(listaNomi);

//while
while (listaNomi.length < 3) {
    // genero index per nomi
    var randomNomi = Math.floor(Math.random() * nomi.length);
    console.log(randomNomi);

    // genero index per cognomi
    var randomCognomi = Math.floor(Math.random() * cognomi.length);
    console.log(randomCognomi);

    // genero il mio full name
    var nuovoNome = nomi[randomNomi] + ' ' + cognomi[randomCognomi];

    // add to guest
    listaNomi.push(nuovoNome);
}

console.log(listaNomi);



/************************************
             SNACK 4
************************************/

// Crea un array di numeri interi.
// Fai la somma di tutti gli elementi che sono in posizione dispari.

var numeri = [10, 35, 47, 89, 74, 21, 7];
var somma = 0;

for( var i = 0; i < numeri.length; i++ ) {
    console.log(numeri[i]);
    console.log('Posizione: ', i);

    if (i % 2 !== 0) {
        somma += numeri[i];
    }
}

console.log('TOT: ', somma);



/************************************
             SNACK 5
************************************/

// Crea due array di numeri che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var listaNumeri1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var listaNumeri2 = [56, 17, 89, 41];

while (listaNumeri1.length > listaNumeri2.length) {
    listaNumeri2.push(Math.floor(Math.random() * 10));
}

while (listaNumeri1.length < listaNumeri2.length) {
    listaNumeri1.push(Math.floor(Math.random() * 10));
}

console.log(listaNumeri1);
console.log(listaNumeri2);




