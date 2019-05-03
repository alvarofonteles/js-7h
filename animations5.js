/**
 * alert
 * confirm
 * prompt
 */

//alert('olá!');

//confirmar = confirm('Deseja Continuar?');

//if (confirmar) { window.location = 'ajuda.html' };

//var a = prompt('Nome Completo');

//document.write(a != null ? 'Seu nome é: ' + a : 'Nulo/Cancelado');

var a = '10.81';

//var b = Number(a);
//a = Number(a);

//a = parseInt(a);
//a = parseFloat(a);

//b = isNaN(a);// testa se é numero

//document.write('>> ',b);


if (isNaN(a)) {
  document.write('Não é um número!');
} else {
  document.write(a);
}
document.write('<br></br>');

var c = 15.56;

c = parseInt(c);
c = Number.isInteger(c);//testa se é Inteiro

document.write(c);

document.write('<br></br>');

var d = 15.56743564;

d = d.toFixed(2);

document.write(d);



