let monedas = {};
fetch("./monedas.json")
  .then(response => response.json())
  .then(data => {
    monedas = data;
    convertirMoneda(moneda1)
  })
const contenedorBotones = document.getElementById('botonesMoneda');

// Recorro el objeto y creo un botón para cada moneda
for (const moneda in monedas) {
    if (monedas.hasOwnProperty(moneda)) {
        const boton = document.createElement('button');
        boton.textContent = moneda;
        boton.addEventListener('click', function () {
            const valorMoneda = monedas[moneda];
            Swal.fire(`El valor de 1 ${moneda} es ${valorMoneda} USD`);

        });
        contenedorBotones.appendChild(boton);
    }
}

let arr = [];

// Obtengo elementos del formulario
const monedaSelect = document.getElementById('moneda');
const montoInput = document.getElementById('monto');
const convertirBtn = document.getElementById('convertir');
const historialBtn = document.getElementById('historial');
const resultadoDiv = document.getElementById('resultado');

// Función para realizar la conversión de moneda
function convertirMoneda() {
  const moneda1 = monedaSelect.value;
  const monto = parseFloat(montoInput.value);

  if (!monedas.hasOwnProperty(moneda1) || isNaN(monto)) {
      resultadoDiv.textContent = "Por favor, ingrese una moneda válida y un monto numérico.";
      return;
  }

const resultado = monto / monedas[moneda1];
resultadoDiv.textContent = `${monto} ${moneda1} = ${resultado.toFixed(2)} USD`;

  // Creo un objeto para representar la conversion actual
const conversion = {
  moneda1,
  monto,
  resultado
  };
  // Aca se obtiene el historial de conversiones almacenado en sessionStorage o, sino, crea un arreglo vacío
  let historial = JSON.parse(sessionStorage.getItem("conversión")) || [];
  historial.push(conversion);
  sessionStorage.setItem("conversión", JSON.stringify(historial))
}

convertirBtn.addEventListener('click', convertirMoneda); 
convertirBtn.addEventListener("click", () => {
  convertirBtn.classList.add("color");
  setTimeout(() => {
    convertirBtn.classList.remove("color");
  }, 2000);
})
historialBtn.addEventListener('click', function () {
const historial = JSON.parse(sessionStorage.getItem("conversión"));

//Recorr y creo una lista de elementos para mostrar el historial
if (historial && historial.length > 0) {
    const listaHistorial = document.createElement('ul');
    historial.forEach(conversion => {
        const itemHistorial = document.createElement('li');
        itemHistorial.textContent = `${conversion.monto} ${conversion.moneda1} = ${conversion.resultado.toFixed(2)} USD`;
        listaHistorial.appendChild(itemHistorial);
      });
      Swal.fire("Historial de conversiones:\n" + listaHistorial.innerHTML);
  } else {
      Swal.fire({
        icon: 'error',
        title: 'Lo siento...',
        text: 'El historial de conversiones se encuentra vacío.',
      })
  }
});

