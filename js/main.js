// AULA 05: Manipulando elementos da página

function clicou(){
    // alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    // window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    // alert("trocar texto");
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mause aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/* AULA 04: Desenvolva página web
// VARIÁVEL GLOBAL
var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?")
alert(validaIdade(idade));
// VARIÁVEL LOCAL
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?")
alert(validaIdade(idade));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
console.log(setReplace("Vai Japão", "Japão", "Brasil"));

function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(5, 10));
*/

/* AULA 03: Condicionais, laços de repetição e data
var d = new Date();
console.log(d);
console.log(d.getMonth() + 1);
console.log(d.getDay());
// fiquei com dúvida
console.log(d.getHours());
console.log(d.getMinutes());

var count;
for (count = 0; count <= 5; count++){
    console.log(count);
}

var count = 0;
while (count <= 5){
    console.log(count);
    count++
}

var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade");
} else{
    alert("Menor de idade");
};
*/

/* AULA 2: Array e dicionário
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
// alert(frutas[1].nome);

var fruta = {nome: "maçã", cor: "vermelha"};
// dicionário
console.log(fruta.nome);
alert(fruta.cor);

var lista = ["maça", "pera", "laranja"];
lista.pop();
lista.push("uva");
console.log(lista);
console.log(lista[1]);
alert(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[1]);
console.log(lista.join(" - "));
*/

/* AULA 1: Introdução
var nome = "Alessandra Lamas Luisi"
var idade = 40;
var idade2 = 10;
var frase = "Jápão é o melhor time do mundo";
// alert(nome + " tem" + idade + " anos"); //alert -> cria pop up
// alert(idade + idade2);
console.log(nome);
console.log(idade * idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
// replace -> Substitui o texto em uma string
console.log(frase.toUpperCase());
// toUpperCase -> coloca tudo em maiúscula
console.log(frase.toLowerCase());
// toLowerCase -> coloca tudo em minúscula
*/