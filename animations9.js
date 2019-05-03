/**
 * BOM - Browser Object Model
 * DOM - Document Object Model
 */

//------------- window ----------------

/*
window.name = 'Curso de JavaScript';

nome = window.name + '<br>';
largura = window.outerWidth + '<br>';
altura = window.outerHeight + '<br>';
larguraInterna = window.innerWidth + '<br>';
alturaInterna = window.innerHeight + '<br>';
scrollHorizontal = window.pageXOffset + '<br>';
scrollHorizontalX = window.scrollX + '<br>';
scrollVertical = window.pageYOffset + '<br>';
scrollVerticalY = window.scrollY + '<br>';
distanciaEsquerda = window.screenX + '<br>';
distanciaSuperior = window.screenY + '<br>';


document.write(nome, largura, altura, scrollHorizontal,
    scrollHorizontalX, scrollVertical, scrollVerticalY,
    distanciaEsquerda, distanciaSuperior);

//window.alert('teste');

function Abrir() {
    vista = window.open('ajuda.html', '_black', 'width=600, heigh=300');
};

function Fechar() {
    vista.close();
};

function RedimencionarAumentar() {
    vista.resizeBy(100, 100);
};
*/


//------------- frame[] ----------------

//https://www.youtube.com/watch?v=seaq4UxKNHU&ab_channel=YoneyGallardo#t=06h43m54s

historico = window.history;

console.log(historico);

localizacao = window.location.pathname;
//localizacao = window.location.pathname;
//document.write(localizacao, '<br>');
console.log(localizacao);

navegador =  window.navigator.language;
//navegador =  window.navigator.vendor;
//document.write(navegador, '<br>');
console.log(navegador);
