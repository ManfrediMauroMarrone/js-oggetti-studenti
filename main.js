// creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età.
// Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
// creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente.
// Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.
$(document).ready(function() {
  // creo un oggetto studente caratterizzato da nome, cognome ed età
  var student = {
    'nome': 'pippo',
    'cognome': 'rossi',
    'eta': '30'
  };

  // console.log(student['nome']);

  for (var key in student) {
    console.log(key);

    console.log(student[key]);
  }


})
