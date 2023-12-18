/*

-1 Chiedo all'utente quanti km dovrà percorrere
-2 Chiedo all'utente la sua età
-3 Definisco il prezzo al km
-4 Definisco il prezzo del biglietto in base ai km percorsi
-5 Definisco lo sconto applicato per i minorenni
-6 Definisco lo sconto applicato agli over 65
-7 Inserisco tutte le informazioni ottenute nel documento 
*/

/*Controllo collegamento file js*/
console.log('JS OK')

/* Chiedo all'utente i km che dovrà percorrere*/
const userKm = prompt('Quanti km dovrai percorrere?', 100)
console.log(userKm)

/*Chiedo all'utente la sua età*/
const userAge = prompt('Quanti anni hai?', 28)
console.log(userAge)

/*Definisco il prezzo al KM*/
const priceKm = 0.21
console.log(priceKm)

/*Definisco il prezzo del biglietto in base ai KM che percorrerà l'utente*/
const priceTkt = (userKm * priceKm)
console.log(priceTkt)



