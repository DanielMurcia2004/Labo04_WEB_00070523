var variablel;
let variable2;
const variable3 = 2;

var $jquery, _private;

var fiftycent = 1, estonovale = 1;

var variable = 2, VARIABLE = 2;

var camelCase = 2, snake_case = 2;

var camelCase = 2;
var snake_case = 3;


var miVariable;
let mi0traVariable;

miVariable = 2;
miOtraVariable = 2;

var mivariable = 42;
let miOtraVariable = miVariable;

console. log(miVariable); 
var mivariable = 2;
console. log (miVariable); 
console. log (miltraVariable); 
let miotraVariable = 2;
console. log (miltraVariable);
const estoNoDaraProblemas = 42
const estoTambienFallara = 2;
estoTambienFallara = 3; 



typeof miVariable; 
variable instanceof clase;

typeof undefined;

typeof null;
typeof {key: 2};
typeof [15, 4];
typeof new Date();

typeof true;
typeof false;
typeof new Boolean(true);

typeof "hola";

typeof 1;
typeof 1.5;
typeof NaN;
typeof Infinity;

typeof Symbol();
typeof Symbol("mi simbolo");



const suma = 2 + 2;

const resta = 2 - 2;

const multiplicacion = 2 * 2;

const división = 2 / 2;

const modulo = 2 % 2;

const potencia = 2 ** 2;

const concatenarString = "Hola" + "mundo";

const sumaStringYNumero = 1 + "2";

const banana = "b" + "a" + + "a";

const expresion = (3 + 2) * 10;
const expresion2 = 3 + 2 * 10;
const expresion3 = 3 ** 2 **3;


let inicio = +5;
const sumaYasigna = ++inicio;
const asignaYSuma = inicio++;
const restaYasigna = --inicio;
const asignaYResta = inicio--;
console.log(inicio);

let x = 1;
let y = 2;
let z = 3;
x = y;
x+=z;
x*=y;
x/=y;
x%=x;


const masFalsoQueSalvame = !true;

const cherto = true && true;
let noECherto = false && true;
noECherto = false && false;
noECherto = true && false;

let certo = true || true;
eCherto = false || false;
eCherto  = true || false;
const noeCherto = false || false;


const mayorQue = 2 > 1;
const menorQue = 2 < 1;
const mayorOgual = 2 >= 1;
const menorOgual = 2 <= 1;
const igualOcasi= 2 == "2";
const igualYDelMismoTipo = 2 == 2;
const noigual = 2 != 2;

1 == '1';
1==='1' ;
false == 0;
false === 0;
''==0;
''===0;

//Control de flujo if/else 

/* IF ... ELSE
    if (algo verdadero) {
     ejecutar este codigo
} else {
    Si lo anterior no es verdadero ejecutar este codigo
}; */

if (true) {
    console.log("true, por eso me ejecuto");
}else{
    console.log("false, por eso no me ejecuto");
}

const miNumero = prompt("Que numero estoy pensando?");
if(miNumero < 5) {
    alert("MiNumero es bastante pequeño");
}else if(miNumero > 5) {
    alert("MiNumero se ha pasado");
}else{
    alert("MiNumero es5");
}

/* switch
    switch (variable) {
        case valor1:
            ejecutar este codigo
            break;
        case valor2:
            ejecutar este codigo
            break;
        default:
            ejecutar este codigo
    }
            */

let numero = print("Que numero estoy pensando?");
switch(numero) {
    case "5":
        alert("Es 5");
        break;
    case "4":
    case "6":
        alert("Casi aciertas");
        break;
    default:
        alert("Es otro numero");
        break;
}

/*while
    while (condicion) {
        ejecutar este codigo
    }
    */

let edad = prompt("Que edad tienes?");
while(edad <=18){
    alert("No puedes ir a la universidad");
    edad = prompt("Que edad tienes?", 0);
}

/*for
    for (inicio; condicion; incremento) {
        ejecutar este codigo
    }
    */

for(let i = 0; i < 10; i += 1){
    console.log(i);
}

for(let i = 0; i < 10; i -= 1){
    console.log(i);
}

for(let i = 10, j = 0; i>j; i -=1){
    console.log(i, j);
}