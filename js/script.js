/*
PARTE 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà (coppia chiave/valore) dell’oggetto.
*/
var student = {
    name: 'Sebastian',
    surname: 'Rizzo',
    age: '32'
 }

 for(var key in student){
    console.log(key + ':' + student[key]); 
}

/*PARTE 2
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  Ricordatevi, è un array, quindi? for.*/
var classe = [
    {
      name:'Matteo',
      cognome:'Rizzo',
      age: '32'
    },
    {
      name:'Adina',
      cognome:'Pop',
      age: '22'
    },
    {
      name:'Beata',
      cognome:'Corrado',
      age: '62'
    },
    {
      name:'Samuele',
      cognome:'Lettieri',
      age: '27'
    },
    {
      name:'Nicodemo',
      cognome:'Froio',
      age: '30'
    },
  ];
  console.log(classe);

  
for (var i = 0; i < classe.length; i++)  {
    console.log(classe[i].name,classe[i].cognome);

}

/*PARTE 3
Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.
*/
var userName = prompt('Come ti chiami?');
var userSurname = prompt('Qual\'è il tuo cognome?');
var userAge = parseInt(prompt('Quanti anni hai?'));

var studente = {
    name: userName,
    cognome: userSurname,
    age: userAge
}

classe.push(studente);

for (var i = 0; i < classe.length; i++)  {
    console.log(classe[i].name,classe[i].cognome);
    for(var key in classe[i]){
    console.log(key,classe[i][key])
}
}

console.log(classe);