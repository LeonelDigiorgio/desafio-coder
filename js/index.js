let corte = 1000;
let barba = 600;
let corteBarba = 1600;
let coloracion = 2500;

let nombre = prompt("Ingresa nombre y apellido para solicitar un turno");
let direccion = prompt(`Ingresa tu direccion`);
let edad = parseInt(prompt("Ingresa tu edad"));
let numeroCelular = parseInt(prompt("Ingresa tu numero de celular"));
let servicio = prompt(`¿Que servicios queres reservar ${nombre}? Elegi el numero:
1- Corte de cabello.
2- Recorte de barba o afeitado.
3- Corte y barba.
4- Coloracion`);


switch (servicio) {
    case "1":
        alert(`te vas a cortar el cabello, valor :${corte}`)
        break;
    case "2":
        alert(`te vas a afeitar, valor: ${barba}`)
        break;
    case "3":
        alert(`te vas a cortar y afeitar, valor: ${corteBarba}`)
        break;
    case "4":
        alert(`te vas a hacer una coloracion, valor: ${coloracion}`)
        break;
    default:
        alert("no seleccionaste ningun servicio")
        break;
} 