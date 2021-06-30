/* STEP:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 
*/

var firstName = prompt('Scrivi il tuo nome');
console.log(firstName); 

var lastName = prompt('Scrivi il tuo cognome');
console.log(lastName);

var favouriteColor = prompt('Scrivi il tuo colore preferito');
console.log(favouriteColor);

var number = "21";

var yourPassword = document.getElementById('password');
console.log(yourPassword);

yourPassword.innerHTML = firstName + lastName + favouriteColor + number;
