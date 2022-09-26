// 1. Variables 

// alert('JavaScript funcionando correctamente');
let variableSinValor;
let boolean1 = false;
let boolean2 = true;
const PI = Math.PI;
const TAU = 2*PI;
const miNombre = 'Alex';
let miNumeroFav = 7;
const odioJavascript = true;
console.log(miNombre.length);
console.log(typeof miNumeroFav);
console.log("Mi nombre es " + miNombre + " y mi numero favorito es " + miNumeroFav);
console.log( ("Seré un crack en JavaScript al terminar el bootcamp").toUpperCase() );
console.log( ("Hola soy un crack").substring(0, 5) );
miNumeroFav = miNumeroFav.toString();
console.log(typeof miNumeroFav);
const lenguajePreferido = "C++";
const templateLiteral = `Mi lenguaje favorito de programación es ${ lenguajePreferido }`;
console.log(templateLiteral);
console.log(PI.toFixed(2));


// 2. Arrays 

const arrayVacio = [];
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const arrayNumerosPares = [0,2,4,6,8];
const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
const holaMundo = ['Hola', 'Mundo'];
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
console.log(loGuardoTodo.length);
loGuardoTodo.push('Otro Item');
console.log(loGuardoTodo[5]);
console.log(loGuardoTodo[1]);
loGuardoTodo.push('Euralio');

// 3. Objetos

const coche = {
    marca: 'Ford',
    modelo: 'Fiesta',
    matrícula: "2468 JRS",
}
const casa = {
    codPostal: 46003,
    calle: 'La Virgen de la Programación',
    portal: 2,
    piso: 1,
}
const fullStackDeveloper = {
    arrayLenguajes: ['javascript', 'php', 'Mel', 'R', 'Typescrypt', 'GLSL'],
    arrayProyectos: ['Portfolio', 'Mi página personal'],
}
const perro = {
    nombre: 'Tango',
    raza: 'Yorkshire',
    color: 'Marrón',
    edad: 4, // Edad en años
}
const noticia = {
    titular: 'Arde el McDonalds del Bonaire',
    cuerpo: 'Pues eso que la liaron y acabaron prendiedole fuego \
             a las hamburguesas de un euro.'
}
const persona = {
    nombre: 'Alex',
    apellidos: 'Jimenez Alcantud',
    edad: 23
}
console.log(persona.nombre);
console.log(fullStackDeveloper.arrayLenguajes[0]);
const portatil = {
    marca: 'MSI',
}
console.log(portatil.marca);
console.log(portatil['marca']);
const concierto = {
    grupos: ['ACDC', 'Queen', 'Metallica', 'Scorpions']
}
console.log(concierto.grupos);
const led = {
    rojo: 210,
    verde: 113,
    azul: 60,
}
const rgb = [led.rojo, led.verde, led.azul];
console.log(rgb);
const o_Error = {
    codigo: 404
}
console.log(o_Error.codigo);
const grupo = {
    integrantes: ['Juan', 'María', 'José'],
}
console.log(grupo.integrantes[2]);
const impresora = {
    tinta: ['rojo', 'verde', 'azul']
}
const nivelesTinta = impresora.tinta;
console.log(nivelesTinta);
portatil.marca = 'HP'; // MSI ya la tenia
concierto.grupos.push("Guns N' Roses");
console.log(concierto);
concierto.fecha = 'Hoy';
concierto.fecha = new Date();
console.log(concierto.fecha);
console.log(concierto);
grupo.integrantes.pop();
console.log(grupo.integrantes.length);

