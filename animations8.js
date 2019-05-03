/**
 * @author Alvaro Fonteles;
 */

/**
 * objeto{
 *     propriedade(variavel)
 *     -cabeça
 *     -patas
 *     -olhos
 *     metodos(funcao)
 *     --miar
 *     --pular
 * };
 */
/*
function Cachorro(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;

    this.correr = function () {
        document.write('<br>meu cachorro ', nome, ' corre muito.', '<br>');
    };
};

cachorro1 = new Cachorro('Poyck', 3, 5);
cachorro2 = new Cachorro('Rambo', 6, 8);

document.write('Nome: ', cachorro1.nome, '<br>Idade: ', cachorro1.idade, '<br>Peso: ', cachorro1.peso, '<br>');
document.write('<br>Nome: ', cachorro2.nome, '<br>');

cachorro1.correr();


//----------------------------------

class Gato {
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    };

    correr(nome) {
        document.write('Meu gato ', nome, ' é preto');
    }
};

gato1 = new Gato('Gabriela', 3, 4);
document.write(gato1.nome);
document.write('<br><br>');
gato1.correr('Bebê');
document.write('<br><br>');
*/
//----------------------------------
/**
 * Herança
 */
/*
class Animal {
    constructor(tipo, raca) {
        this.zero = tipo;
        this.um = raca;
    };
};

animal = new Animal('Domestico', 'Pedigree');

//document.write(animal.zero);

class Domestico extends Animal {
    constructor(tipo, nome, idade, peso) {
        super(tipo);
        this.um = nome;
        this.dois = idade;
        this.tres = peso;
    };
};

domestico = new Domestico(animal.zero, 'Gabriela', 3, 4);

document.write(domestico.zero, '-', domestico.um, '<br>');
*/

//----------------------------------

//Pessoa - nome, cpf, data_nascimento
//Aluno (herda de Pessoa), Matricula
//Professor (herda de Pessoa), Salario, Disciplina

class Pessoa {
    constructor(nome, cpf, dt_nasc) {
        this.nome = nome;
        this.cpf = cpf;
        this.dt_nasc = dt_nasc;
    };
};

class Aluno extends Pessoa {
    constructor(nome, cpf, dt_nasc, matricula) {
        super(nome, cpf, dt_nasc);
        this.matricula = matricula;
    };
};

pessoa = new Pessoa('Lorena Braga', '123.456.789-00', '19.09.18');
aluno = new Aluno(pessoa.nome, pessoa.cpf, pessoa.dt_nasc, 987);

document.write('Dados do Aluno<br><br>');
document.write('Nome: ', aluno.nome, '<br>CPF: ', aluno.cpf, '<br>Data Nascimento: ', aluno.dt_nasc, '<br>Matrícula: ', aluno.matricula);

document.write('<br><br>Dados do Professor<br><br>');

class Professor extends Pessoa {
    constructor(nome, cpf, dt_nasc, salario, disciplina) {
        super(nome, cpf, dt_nasc);
        this.salario = salario;
        this.disciplina = disciplina;
    };
};

pessoa2 = new Pessoa('Tia Rosangela', '987.654.321-00', '10.11.1977');
professor = new Professor(pessoa2.nome, pessoa2.cpf, pessoa2.dt_nasc, 2500.99, 'Matemática');

document.write('Nome: ', professor.nome, '<br>CPF: ', professor.cpf, '<br>Data Nascimento: ', professor.dt_nasc, '<br>Salário: ', professor.salario, '<br>Disciplina: ', professor.disciplina);

//https://www.devmedia.com.br/entendendo-e-aplicando-heranca-em-java/24544

//https://www.youtube.com/watch?v=seaq4UxKNHU&ab_channel=YoneyGallardo#t=06h06m20s










































