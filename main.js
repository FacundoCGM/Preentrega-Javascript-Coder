
const edadIngresada = Number(prompt(`Bienvenido al almacén de bebidas. Por Favor, ingrese su edad`))

function menuMenores (){
    console.log(`0- Agua: $100 (sin iva)`)
    console.log(`1- Jugo: $150 (sin iva)`)
    console.log(`2- gaseosa: $180 (sin iva)`)
    console.log(`3- Energizante: $85 (sin iva)`)
}

function menuMayores(){
    menuMenores()
    console.log(`4- Cerveza: $170 (sin iva)`)
    console.log(`5- Vodka: $210 (sin iva)`)
    console.log(`6- Champagne: $270 (sin iva)`)
}

if (edadIngresada >= 18){
    menuMayores()
    console.log(`7- He terminado mi compra.`)
} else {
    menuMenores()
    console.log(`4- He terminado mi compra.`)
}

const precios = [100, 150, 180, 85, 170, 210, 270]

let valorCompra = 0

if (edadIngresada >= 18){
    do {
        eleccionCliente = Number(prompt(`¿Qué desea llevar hoy?`))
        if (eleccionCliente <= 6){
            valorCompra = valorCompra + precios[eleccionCliente]
        } else if (eleccionCliente >= 8){
            alert(`Usted ha ingresado un número inválido. Por favor, ingrese nuevamente.`)
        }
    } while (eleccionCliente != 7);
} else {
    do {
        eleccionCliente = Number(prompt(`¿Qué desea llevar hoy?`))
        if (eleccionCliente <= 3){
            valorCompra = valorCompra + precios[eleccionCliente]
        } else if (eleccionCliente >= 5){
            alert(`Usted ha ingresado un número inválido. Por favor, ingrese nuevamente.`)
        }
    } while (eleccionCliente != 4);
}

function precioConIva(precioSinIva){
     return precioSinIva * 1.21
}

let valorTotalCompra = precioConIva(valorCompra)
alert (`El total de su compra es de $` + valorTotalCompra)

