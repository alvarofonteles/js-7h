/*
let Anos, Meses, Dias, sAnos, sMeses, sDias;

function DiasExtenso(NumDias) {
//{ --- Calcula o número de anos --- }
    Anos = 0;
    while (NumDias >= 365) {
        Anos++;
        NumDias = NumDias - 365;
    }
    if (Anos > 1) {
        sAnos = ' anos ';
    }
    else {
        sAnos = ' ano ';
    }
//{ --- Calcula o número de meses --- }
    Meses = 0;
    while (NumDias >= 30) {
        Meses++;
        NumDias = NumDias - 30;
    }
    if (Meses > 1) {
        sMeses = ' meses e ';
    }
    else {
        sMeses = ' mês e ';
    }
//{ --- O Número de dias é a sobra --- }
    Dias = NumDias;
    if (Dias > 1) {
        sDias = ' dias ';
    }
    else {
        sDias = ' dia ';
    }
    return `${Anos} ${sAnos} ${Meses} ${sMeses} ${Dias} ${sDias}`;
    //return (Anos) + sAnos + (Meses) + sMeses + (Dias) + sDias;
}

let n = prompt('Digite o número de dias!');
if (n != null) {
    document.write(DiasExtenso(n));
}


nome = "Álvaro Fonteles";
nome2 = nome.length;
nome = nome.toUpperCase();
alert(nome + ' - ' + nome2);

console.log(nome + ' - ' + nome2);*/


/*let a = 29;
a = a.toString();
let b = 5;
document.write(a + b);*/

/**
 * length
 * ---------------------
 * indexOf
 * lastIndexOf
 * search
 * match (/?/gi)
 * substr
 * substring
 * charAt
 * startsWith
 * endsWith
 * includes
 *---------------------
 * repeat
 * replace
 * slice
 * split
 * trim
 * concat
 */

let a = "    Obrigado   Pai   <br>";

/*
document.write(a.match(/me/gi));
document.write(a.substr(4, 22), '<br><br>');//pega a palavra
document.write(a.substring(4,22));//copy
document.write(a.charAt(1));
document.write(a.startsWith('que'));
document.write(a.endsWith('perdoar.'));
document.write(a.includes('me', 31));
*/
//---------------------

//document.write(a.repeat(6));
//document.write(a.replace('Pai','Senhor meu Deus'));
//document.write(a.slice(9,12));//pega a string em intervalo

let b = "janeiro fevereiro março abril maio, junho";
//b = b.replace(', ', ' ');
console.log(b.split(" ")); //comando para o node cmd

//document.write(a.trim());

uno = 'oi galera ';
dos = 'tudo bem com vocês? '
tres = 'espero que sim, bem vidos!';
//document.write(uno.concat(dos, tres));

c = 'Delphi';
d = 'JavaScript/Back & Font-End';
document.write(`Sou programador ${c} mas estou estudando 
    <br>para ser um ${d} em nome de Jesus Cristo`);










