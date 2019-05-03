document.write('Segunda Parte.', '<br><br>');

/** Continua daqui */

function ola() {
    var ola = document.write('Olá, meu foco será JavaScript.');
    return ola;
}

ola();
document.write('<br><br>');

function Cliente(nome, sobrenome, idade) {
    var retorno = document.write('Nome: ', nome,
        '<br>Sobrenome: ', sobrenome,
        '<br>Idade: ', idade, ' anos');
    return retorno;
}

Cliente('Álvaro', 'Fonteles', 35);
document.write('<br><br>');

function nome(nome = '') {
    return document.write('Nome: ', nome);
}

nome('Alvaro Fonteles');
document.write('<br><br>');

function endereco(rua, numero) {
    if (rua != null && numero != null) {
        resposta = document.write(rua, ', ', numero)
    } else {
        resposta = document.write('endereço obrigatório')
    }
    return resposta;
}

endereco('Avenida Dioniso Leonel Alencar', 1570);
document.write('<br><br>');

function mes(...meses) {
    return document.write(meses);
}

mes('janeiro', 'fevereiro', 'março', 'abril');
document.write('<br><br>');

function mes2(...meses2) {//arry
    for (let a of meses2) {
        document.write(a, '<br>');
    }
}

mes2('janeiro', 'fevereiro', 'março', 'abril');
document.write('<br><br>');

function seis(nome, valor, peso) {
    return nome + ' ' + valor + ' ' + peso;
}

fruta = ['banana', 2.55, 1];

document.write(seis(...fruta));

document.write('<br><br>');
//funcao anonima

siete = function () {
    return document.write('oi galerinha')
}

siete();
document.write('<br><br>');

//========================================

let a = function (nome, uno) {
    let i = nome;
    uno(i);
};
let b = function (i) {
    document.write(i);
};

a('Alvaro', b);

document.write('<br><br>');
