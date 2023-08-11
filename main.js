
const monedas = {
    USD: 1.0,
    EUR: 1.11,
    REALES: 4.75,
    URU: 38.0,
    ARG: 543.0,
}; 
let arr = [];
  
function convertirMoneda(moneda1, monto) {
let resultado = 0;
  
if (moneda1 === "EUR") {
     resultado = monto / monedas.EUR;
    alert(`${resultado}` + " dolares.");
    } else if (moneda1 === "REALES") {
      resultado = monto / monedas.REALES;;
    alert(`${resultado}` + " dolares .");
    } else if (moneda1 === "URU") {
      resultado = monto / monedas.URU;
    alert(`${resultado}` + " dolares.");
    } else if (moneda1 === "ARG") {
      resultado = monto / monedas.ARG;
    alert(`${resultado}` + " dolares.");
    } 
    return resultado;
  } 
  alert(
    "Bienvenido, usuario! El siguiente conversor modifica el monto que ingrese por pantalla de la moneda que desee a dolares ."
  );  
let continuar = true; 
while (continuar) {
    let moneda1 = prompt(
    "Qué moneda desea convertir? (EUR, URU, ARG, REALES)"
    ); 
    if (!monedas.hasOwnProperty(moneda1)) {
    alert("Moneda no válida.");
    continue;
    }
  
    let monto = parseInt(prompt("Ingrese el monto a convertir"));
    let resultado = convertirMoneda(moneda1, monto);
    arr.push(resultado);
  
    let respuesta = prompt("Desea realizar otra operación? (SI/NO)");
    if (respuesta.toUpperCase() === "NO") {
    continuar = false;
    }
  }
  
  let suma = 0;
  
  for (let index of arr) {
    suma += index;
  }
  
  alert("El monto total de dolares convertidos es de " + `${suma}` + " dolares")
  
  

