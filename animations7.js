/*
semana = new Array('Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta');
finalsemana = ['Sábado', 'Domingo'];

let ii = 0;
for (let i = 0; semana[i]; i++) {
    document.write('for: ', i, ' ', semana[i], '-feira', '<br>');
    ii++;
}
document.write(ii, ' Semanas');
document.write('<br><br>');
{
    let i = 0
    while (i < finalsemana.length) {
        document.write('while: ', i, ' ', finalsemana[i], '<br>');
        i++;
    }
}

document.write('<br><br>');
{
    unos =
        [
            10,
            [20, 21, 22, 23, 24, 25],
            [30, 31, 32, 33, 34, 35],
            [40, 41, 42, 43, 44, 45],
            50
        ];

    for (let a = 0; unos[a]; a++) {
        for (let b = 0; unos[a][b]; b++) {
            document.write('Valor B: ', unos[a][b], '<br>');
        }
        document.write('Valor A: ', unos[a], '<br>');
    }
}
document.write('<br><br>');

//https://www.youtube.com/watch?v=seaq4UxKNHU&ab_channel=YoneyGallardo#t=05h04m53s


dos = [
    [20, 21, 22, 23, 24,
        [25, 26, 27, 28, 29]
    ],
    [30, 31, 32, 33, 34, 35],
    [40, 41, 42, 43, 44, 45]
];

document.write(dos[0][5][3]);
*/

/**
 * length
 * push  incrementa mais um
 * pop  devolve o ultimo
 * join converte em uma string
 * split converte em array
 * array.from (map) coverte em array
 * sort ordena alfabeticamente um array
 * reverse 12345 para 54321
 */

/**
 *
 */

/*
let uno = [10, 20, 30, 40, 50];
uno.push(60);
uno.push(70);

document.write(typeof uno);
console.log(uno.join());
document.write(uno.pop());
document.write('<br>');
document.write(uno.length);

semana = Array.from(document.querySelectorAll('.dias p'));

ver = semana.map(dia => dia.textContent);

console.log(ver);
*/
semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Terça', 'Sabado'];
//document.write(semana.sort());
//document.write(semana.reverse());

/**
 * for in
 * forEach
 * find devolve a string procurada apenas a primeira que encontrar
 * findIndex
 * filter devolve a string procurada todas que encontrar
 * some boolean que verifica valor se existe
 */

/*for (let d in semana) {
    document.write(d, '-', semana[d], '<br>');
} //d = indice,  semana = valor

document.write('<br><br>');

semana.forEach((valor, indice) => document.write(indice, '-', valor, '<br>'));
document.write('<br><br>');

let a = semana.find(dos => dos == 'Terça');
document.write(a);
document.write('<br><br>');
//document.write(a != null ? 'existe' : 'não existe');
let b = semana.findIndex(dos => dos == 'Terça');
document.write(b);
document.write('<br><br>');
let c = semana.filter(dos => dos == 'Terça');
document.write(c);

let uno = [10, 20, 30, 40, 50, 60];

document.write(uno.some(a => a >= 50));

document.write('<br>');
*/

let os = '  alvaro,   leticia, lorena, gabriela(gata)  ';
os.trim();
document.write(os);
os = 'alvaro, leticia, lorena, gabriela(gata)';
console.log(os.trim().split(', '));
console.log(os.split());
console.log(os.split(','));