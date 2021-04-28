/*
var nome = "Eduardo Yoshizato";
var idade = 35;
alert("Bem vindo " + nome + " voce tem " + idade + " anos");

var frase = "Japão é o melhor time do mundo!";

console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil"));
*/
////////////////////////////////////
/*
var lista = ["maça", "pera", "laranja"];

lista.push("uva");
//lista.pop();

console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("|"));
*/
////////////////////////////////////
/*
var fruta = { nome: "maça", cor: "vermelha" };

console.log(fruta);
alert(fruta.cor);
*/
/////////////////////////////////////
/*
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];


console.log(frutas);
alert(frutas[1].cor);
*/
/////////////////////////////////////
/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};
*/
//////////////////////////////////////
/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++
}
*/
/////////////////////////////////////
/*
var count;
for (count = 0; count <= 5; count++) {
    console.log(count);
    alert(count);
}
*/
//////////////////////////////////////
/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
*/
/////////////////////////////////////
/*
function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novoNome) {
    return frase.replace(nome, novoNome);
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/////////////////////////////////////
/*
var valida = 0;

function validaIdade(idade) {
    if (idade >= 18) {
        valida = true;
    } else {
        valida = false;
    }
    return valida;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade);
console.log(valida)
*/
//////////////////////////////////////
function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";

}

function redirecionar() {
    window.open("https://globo.com/");
    //window.location.href = "https://globo.com";
}

function trocar(element) {
    //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse";
    element.innerHTML = "Obrigado por passar o mouse";
}

function voltar(element) {
    //document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui";
    element.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("página carregada");
}

function funcaoChange(element) {
    console.log(element.value);
}

