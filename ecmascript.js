/* const nombres = ['Carlos', 'Carolina', 'Jorge', 'Pepe', 'Florencia']
const nombreBuscado='Carlos'
/* for(let i =0; i< nombres.length; i++){
    console.log(nombres[i]);
}
if(nombres.includes(nombreBuscado)){
    console.log('Nombre incluido')
}else{
    console.log('Nombre no incluido')
} */

/* const datosPersonales = {
    nombre: 'Carlos',
    apellido: 'Perren',
    edad: 48,
    saldo: 1000.54,
    activo:true
}
console.log(Object.values(datosPersonales)) */

// ?? operador nullish
/* const config ={
    PUERTO:3010
}
const puerto1 = config.PUERTO ?? 3000 // evalua si es null o undefined
const puerto2 = config.PUERTO || 3000 // evalua si es null o undefined, 0, ...

console.log(puerto1)
 */

//metodo reduce
/* const bills = [222,301,100,12,1010]

const total = bills.reduce((actual,adder) => {
    return adder = adder + actual
    //return adder+=actual
})
console.log(total) */

//operador spread (...)
/* const datosPersonales = {nombre: 'Carlos', apellido: 'Perren',edad: 48} */

//Desestructuracion de objetos
/* const datosCompletos = {
    ...datosPersonales,//desestructurando
    suscripcion: 'premium',
    saldo: 10250.36
}

console.log(datosPersonales)
console.log(datosCompletos) */

/* const pedidos = [
    {manzanas:3, peras:2, carne:1, jugos:5, dulces:3},
    {manzanas:3, sandias:1, huevos:6, jugos:1, panes:4},
] */

const cadenaRecibida = ' COderHouSe    '

const cadenaNormalizada = cadenaRecibida.trim().toUpperCase()

console.log(cadenaRecibida)
console.log(cadenaRecibida.length)

console.log(cadenaNormalizada)
console.log(cadenaNormalizada.length)