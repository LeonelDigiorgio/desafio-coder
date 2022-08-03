/* class Servicios{
    constructor(tipo, precio){
        this.tipo = tipo;
        this.precio = precio;
    }
} 
const corte = new Servicios("corte", 1000);
const barba = new Servicios("barba", 600);
const corteYbarba = new Servicios("corteYbarba", 1600);
const coloracion = new Servicios("coloracion", 2500);


class Turno{
    constructor(dia, horario){
        this.dia = dia;
        this.horario = horario;
    }
}
const lunes = new Turno("Lunes", "de 9 a 18hs");
const martes = new Turno("Martes", "de 9 a 18hs");
const miercoles = new Turno("miercoles", "de 9 a 18hs");
const jueves = new Turno("jueves", "de 9 a 18hs");
const viernes = new Turno("viernes", "de 9 a 18hs");




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
        alert(`te vas a cortar el cabello, valor :${corte.precio}`)
        break;
    case "2":
        alert(`te vas a afeitar, valor: ${barba.precio}`)
        break;
    case "3":
        alert(`te vas a cortar y afeitar, valor: ${corteYbarba.precio}`)
        break;
    case "4":
        alert(`te vas a hacer una coloracion, valor: ${coloracion.precio}`)
        break;
    default:
        alert("no seleccionaste ningun servicio")
        break;
} 


    
let turno = prompt("Que dia quieres reservar tu lugar, elije un numero: 1-Lunes. 2-Martes 3-Miercoles 4-Jueves 5-Viernes ");
 if (turno >=6 || !isNaN) {
    alert("no seleccionaste ningun dia")
}
switch (turno) {
    case "1":
        alert(`Tu turno es el dia: ${lunes.dia} en el horario de: ${lunes.horario}`)
        break;
    case "2":
        alert(`Tu turno es el dia: ${martes.dia} en el horario de: ${martes.horario}`)
        break;
    case "3":
        alert(`Tu turno es el dia: ${miercoles.dia} en el horario de: ${miercoles.horario}`)
        break;
    case "4":
        alert(`Tu turno es el dia: ${jueves.dia} en el horario de: ${jueves.horario}`)
        break;
    case "5":
        alert(`Tu turno es el dia: ${viernes.dia} en el horario de: ${viernes.horario}`)
        break;    
    }
 */


    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", validarFormulario);

    function validarFormulario(e){
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log(e.target[3].value);
        console.log(e.target[5].value);
        console.log(e.target[6].value);
        console.log(e.target[7].value);
        console.log(e.target[8].value);
        console.log(e.target[9].value);
        console.log(e.target[10].value);
        console.log(e.target[11].value);
        console.log(e.target[12].value);
        console.log(e.target[13].value);
        console.log(e.target[14].value);
        console.log(e.target[15].value);
        console.log(e.target[16].value);
        }
