var somewords = "Bienvenidos, esto es un STRING. ";
console.log(somewords);
document.write(somewords+"<br>");

let number = 5;
console.log("Esta es una variable numérica: "+number+". ");
document.write("Esta es una variable numerica: "+number+"<br>");

const soleado = true;
console.log(soleado);
document.write("Esto es un booleano: "+soleado+"<br>");

let age = 40;
let week = 7;
let child = 2;
let adress = 22;
console.log(age+child);
document.write(age+child+"<br>");
console.log(age*child);
document.write(age*child+"<br>");
console.log(adress-child);
document.write(adress-child+"<br>");
console.log(age/week);
document.write(age/week+"<br>");

let me = "Sole ";
let city = "Vigo";
let verb = "vive_en";
console.log("Esto es una concatenacion: "+me+city+verb);
document.write("Esto es una concatenacion: "+me+verb+city+"<br>");


function hello(yourName)
{
var hello;
hello = yourName;
document.write("Hola ", hello+"<br>");
}
let yourName = " Soledad";
hello(yourName);
console.log(hello);

function suma(num1, num2)
{
var suma;
suma = num1 + num2;
document.write("Funcion Suma = ", suma+"<br>");
}
suma(age,adress);
console.log(suma);

function par(num1)
{
let par;
par = num1 % 2;
if (num1 % 2 === 0)
{document.write("Funcion Par o impar = "+num1+"true"+"<br>");}
else
{document.write("Funcion Par o impar = "+num1+"false"+"<br>");}
}
par(week);
console.log(par);

function par(num1)
{
let par;
par = num1 % 2;
if (num1 % 2 === 0)
{document.write("Funcion Par o impar = "+num1+"true"+"<br>");}
else
{document.write("Funcion Par o impar = "+num1+"false"+"<br>");}
}
par(adress);
console.log(par);

let carro = {
    marca: "Ford",
    modelo: ["Mondeo", 1988],
    color: "verde",
    puertas: 5,
    
}
console.log(carro.marca);
document.write(carro.marca+"<br>");

console.log(carro.modelo);
document.write(carro.modelo+"<br>");


let anioCampeonato = [2000, 2004, 2008, 2013];
for(let i = 0; i < anioCampeonato.length; i++){
    console.log(anioCampeonato[i]);
    document.write("Mostrar elemento "+i+" del array: "+anioCampeonato[i]+"<br>");
};

anioCampeonato.push(2015);
console.log(anioCampeonato);


