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
  // uso un ciclo for per stampare le caratteristiche dell'oggetto
  for (var key in student) {
    console.log(key);

    console.log(student[key]);
  }


  var arrayStudents = [

    {
      'nome': 'pippo',
      'cognome': 'rossi',
      'eta': '30'
    },

    {
      'nome': 'paperino',
      'cognome': 'verdi',
      'eta': '20'
    },

    {
      'nome': 'pluto',
      'cognome': 'bianchi',
      'eta': '27'
    }

  ]
  // creo un ciclo for per scorrere gli elementi dell'array
  for (var i = 0; i < arrayStudents.length; i++) {
    current = arrayStudents[i]
    console.log(current);
  }
  // chiedo all'utente un nome e un cognome e un età, creo un nuovo oggetto studente e lo pusho dentro l'array
  var name = prompt('inserisci un nome')

  var surname = prompt('inserisci un cognome')

  var age = prompt('inserisci l"età')

  var newStudent = {
    'nome': name,
    'cognome': surname,
    'eta': age
  };

  console.log(newStudent);

  arrayStudents.push(newStudent)

  console.log(arrayStudents);

})
