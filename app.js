//Tiempo de viaje

//Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

const distancia = prompt("Por favor ingresa la distancia de tu recorrido en kilometros");
/*
alert("tiempo de recorrido a pie: " + distancia / 5 + " h");
alert("tiempo de recorrido en bicicleta: " + distancia / 10 + " h");
alert("tiempo de recorrido en auto: " + distancia / 45 + " h");
*/
const aPie = distancia / 5;
const enBici = distancia / 10;
const enAuto = distancia / 60;
alert(`El tiempo que tardaría en recorrer ${distancia} km a pie seria ${aPie} hs, en bicicleta ${enBici} hs y en auto es ${enAuto} hs.`);


//EJERCICIO RESUELTO POR CARO
// const recorrido = prompt("Ingrese la distancia de su recorrido");
// alert(`El tiempo que tardaría en recorrer esta distancia en:
// Pie: ${recorrido / 5}
// Bicicleta: ${recorrido /10}`);

//EJERCICIO RESUELTO POR HANNAH
// const recorrido = prompt("Ingrese la distancia de su recorrido");
// const aPie = recorrido / 5
// const enBici = recorrido / 10
// alert(`El tiempo que tardaría en recorrer esta distancia en:
// Pie: ${aPie}
// Bicicleta: ${enBici}`);








