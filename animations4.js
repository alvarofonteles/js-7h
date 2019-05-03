//var eventoClique = document.querySelector('.unoClique');
//eventoClique.addEventListener('click', function () { alert('clicou'); });

/**
 * keydown
 * keypress
 * keyup
 * load
 */

//window.addEventListener('keydown', function () { alert('keydown!') });
//window.addEventListener('keydown', function (event) { alert(event.keyCode) });
/*window.addEventListener('keypress',
  function (event) {
    //diz o nome da tecla do alfabeto
    alert(String.fromCharCode(event.keyCode));
  });
 
window.addEventListener('load', function () { this.alert('carregou!') });
*/

/*
var timpo = setInterval(
  function () {
    document.write('Texto em 02 segundos', '<br>')
  },
  2000
);

//função reduzida
setInterval(() => { document.write('Texto em 02 segundos<br>') }, 2000);

setTimeout(() => {
  document.write('para em 03 segundos.')
}, 3000);

var primeiro = document.querySelector('.uno');
primeiro.addEventListener(
  'play',//pause
  () => { alert('clicou no play'); }
);

primeiro.addEventListener(
  'ended',
  () => { alert('Terminou seu vídeo'); }
);

primeiro.addEventListener(
  'seeking', //seeking - quando adiantamos o video
  () => { alert(primeiro.currentTime) }//diz o tempo qua adintou
);
*/