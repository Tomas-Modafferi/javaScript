
const USD= 1.0;
const EUR= 1.11;
const REALES= 4.75;
const URU=38.0;
const ARG= 543.0;

function convertirMoneda(moneda1, monto){
    if(moneda1 == "EUR"){
        let resultado = EUR * monto
        alert(`${resultado}`)
    }
    else{
        if (moneda1== "REALES"){
            let resultado = REALES * monto
            alert(`${resultado}`)
        }
    }
    if(moneda1 == "URU"){
        let resultado = URU * monto
        alert(`${resultado}`)
    }
    else{
        if(moneda1 == "ARG"){
            let resultado = ARG * monto
            alert(`${resultado}`)
        }
    }
}

let continuar = true
while(continuar = true){
    let moneda1= (prompt("A que moneda desea convertir sus dolares?(EUR, URU, ARS, REALES)"))
    let monto = parseInt(prompt("Ingrese el monto a convertir"))
    convertirMoneda(moneda1, monto)
    let respuesta = prompt("Desea realizar otra operacion?")
    if(respuesta = "NO"){
        continuar = false
}
}


