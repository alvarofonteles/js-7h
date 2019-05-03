function uno(nome) {
    return nome
};

document.write(uno('Álvaro'), '<br><br>');

var uno2 = nome => nome;

document.write(uno2('Álvaro Fonteles'), '<br><br>');

dos = (nome, idade) => nome + idade;

document.write(dos('Álvaro ', 35), '<br><br>');

function clique() {
    alert('clicou');
};

function passar() {
    alert('passou');
};

function sair() {
    alert('saiu');
};