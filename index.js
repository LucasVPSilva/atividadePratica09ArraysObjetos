
// Exercicio 1:

/*

const produto = {
    descricao: "Mouse",
    valor: 90
}

console.log(produto)
for (const key in produto) {
    console.log(`${key} = ${produto[key]}`)

}

*/

// Exercicio 2:

/*

const notebook = {
    processador: "i7",
    memoria: "16GB",
    preco: 5000,
    hd: "1TB",
    ssd: "256GB",
}

for (const key in notebook) {
    console.log(`${key} = ${notebook[key]}`)
}

*/

// Exercicio 3:

/*

const alunos = [
    {
        nome: "Lucas",
        nota1: 7.0,
        nota2: 8.0,
    },

    {
        nome: "Bruna",
        nota1: 9.0,
        nota2: 8.5,
    }
]
let media = 0;
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
    console.log(`Média do aluno: ${alunos[i].nome} = ${(alunos[i].nota1 + alunos[i].nota2) / 2} `)
    media += ((alunos[i].nota1 + alunos[i].nota2) / 2).toFixed(1) / alunos.length

}

console.log(media)

*/

// Exercicio 4:


const usuarios = []


do {
    let salario = 0;
    const nome = prompt("Informe o nome:");
    const idade = prompt("Informe a idade:");
    const trabalha = confirm("Está trabalhando?");
    if (trabalha === true) {
        salario = Number(prompt('Informe o seu salário:'));
    }

    const usuario = {
        nome,
        idade,
        trabalha,
        salario,

    }
    usuarios.push(usuario);







} while (confirm('Deseja continuar cadastrando?'));

console.log(usuarios);

console.log('Pessoas desempregadas:');
for (const pessoa of usuarios) {
    if (!pessoa.trabalha) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    }

}

console.log('Pessoas empregadas com salários menores que 2500:');
for (const pessoa of usuarios) {
    if (pessoa.salario <= 2500 && pessoa.salario > 0) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salario: ${pessoa.salario}`);
    }

}

console.log('Pessoas empregadas com salários maiores que 2500:');
for (const pessoa of usuarios) {
    if (pessoa.salario > 2500) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salario: ${pessoa.salario}`);
    }

}