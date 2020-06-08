document.write("Conhecendo o JS")
// comments
document.write('<br>') // pula linha
// Variaveis, Tipos de dados
var myvar // undefined
myvar = "Coe" // defined as String
const s1 = "mane"  

document.write(myvar)
document.write(myvar)
document.write(myvar)

document.write('<br>')
document.write(myvar +" "+s1) //concat strings

document.write('<br>')
// Writing strings
const s2 = "Isso é uma string"
const s3 = 'Isso é também uma string'
const s4 = `Isso é uma string também`

// Number
const n1 = 1
const n2 = 70
const n3 = "17"
document.write(n1 + n2) // sum (number+number)
document.write('<br>')
document.write(n3 + n1) // concat (string+number)

document.write('<br>')
// Boolean - True or False
const bTrue = true
const bFalse = false

document.write(bTrue)

document.write('<br>')
// Object
const pessoa = {
  altura: "1,80m",
  idade: 24,
  solteiro: true,
  correr(){ 
    document.write("run Forest")
  }
}
document.write(pessoa.altura) // exibindo uma propriedade do objeto.
document.write('<br>')
pessoa.correr() // acessando uma funcionalidade do objeto.

document.write('<br>')
// Array
const colecaoDeBolinhas = ["blue", "green", 1, {name: "My name"}]

document.write(colecaoDeBolinhas[3].name) //exibindo objetos dentro de um Array

document.write('<br>')
// Funções - Funcionalidades - Atalhos - Reuso de código

// Registrar função
function sayMyName(name) {
  document.write(name)
}
// Aqui percebemos que 'document' é um objeto e 'write' é uma funcionalidade dele e 'name' é o parametro.

// Executar função
sayMyName("Fulano")
sayMyName("Beltrano")
sayMyName("Siclano")

document.write('<br>')
// Condionais

/*if( true ) {
  caminho 1
} else {
  caminho 2
}*/
const notaFinal = 7

if( notaFinal < 5 ) {
  document.write("Reprovado")
} else {
  document.write("Aprovado")
}

document.write('<br>')
// Loop - Repetições

for (i = 0; i < 10; i++) {
  document.write(`<p> ${i} </p>`) 
}