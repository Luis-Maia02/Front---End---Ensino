const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");

const nomeValor = nome.value;
const idadeValor = Number(idade.value);
const cursoValor = curso.value;

console.log (`Nome: ${nomeValor}`);
console.log (`Idade: ${idadeValor}`);
console.log (`Curso: ${cursoValor}`);