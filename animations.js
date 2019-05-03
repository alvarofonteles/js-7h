/* comentario */

/*var gato;
gato = "Isso é um gato";

gato1 = "Novo Gato";

var numero = 1234;
var verdadeiro = true;
//var data = Date();
var data = new Date();
//alert(gato1);

//document.writeln(typeof numero);
//document.writeln(typeof gato);
//document.writeln(typeof verdadeiro);
//document.writeln(data.getDate());
document.writeln(data.getHours() + " : " , data.getMinutes());
console.log(gato);*/

var um = 29;
var dois = 10;
var tres = um%dois;
document.write('módulo da divisão: ', tres);

document.write('Primeira Parte.', '<br><br>');

/** Continua daqui */
/*
var novoNumero = ' Programador JavaScript 2020'
function numero(num) {
  var uno = num + novoNumero;
  //alert(uno);
  document.write(uno);
}


  var uno = 10 + 20 / 2;
  var uno1 = 10 + (20 / 2);
  var dos = 20;
*/

//document.write(uno != dos);
/*
  <
  >
  <=
  >=
  ==
  !=
*/
/*
  && (and)
  || (or)
  ! (not)
*/

//document.write(!uno == dos || uno > dos);

//var uno = uno + 20;
/*
 * var uno = 30;
 * +=
 * -=
 * *=
 * /=
 uno += 20;
 */
//document.write(uno);

//condicion ? true : false; //operador ternário

//var uno = '';
//var dos = 20;

//document.write(uno == dos ? 'igual' : 'diferente');

//document.write(uno , dos);
//document.write(uno + dos);

/*
 * condicoinal
 * if
 * if - else
 * if - else if - else
 * switch
 */

/**
if (uno == dos) {
  //document.write('é igual')
}

if (dos == 20 && uno == '') {
  //document.write('igual')
} else {
  //document.write('é diferente')
}


function condicional(num) {
  var uno = num;
  var dos = 20;

  if (uno == 10) {
    document.write('valor igual a ', uno)
  } else if (uno == 20) {
    document.write('valor igual a ', uno)
  } else if (uno == 30) {
    document.write('valor igual a ', uno)
  } else if (uno == 40) {
    document.write('valor igual a ', uno)
  } else {
    document.write('não é igual a nenhum - ', uno)
  }
}

var a = 3;
var b;

switch (a) {
  case 0: b = 'valor igual a: ' + a;
    break;
  case 1: b = 'valor igual a: ' + a;
    break;

  default: b = 'valor diferente: ' + a;
    break;
}
document.write(b);
*/

/**
 * while
 * do-while
 * for
 * break-continue
 */

var uno, dos;
uno = 30;
dos = 20;

var nome = 'Leticia Braga Fonteles. ';
var idade = '08 anos. ';
var depois = 'No próximo ano fará 09 anos.';
//document.write(nome + '<br>' + idade + '<br>' + depois);

/*while (uno < dos) {
  document.write(uno, '<br>');
  uno += 1;
}

while (uno <= dos) {
  document.write(uno, '<br>');
  uno++;
}

do {
  document.write(uno, '<br>');
  uno--;
} while (uno >= dos);


for (var i = 1; i <= 10; i++) {
  if (i < 10) {
    document.write('0', i, '<br>');
  } else {
    document.write(i, '<br>');
  }
}

for (var i = 1; i <= 20; i++) {
  if (i == 5) { break; }
  document.write(i, '<br>');
}

for (var i = 1; i <= 10; i++) {
  if (i == 4 || i == 8) { continue; }
  document.write(i, '<br>');
}
*/

for (var i = 1; i <= 15; i++) {
  if (i >= 5 && i <= 10) { continue; }
  document.write(i, '<br>');
}