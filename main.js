/* Crea un script en JS que le solicite al usuario ingresar uno o más datos. 
Luego, con JavaScript, realiza operaciones matemáticas o de concatenación sobre las entradas teniendo en cuenta el tipo de dato. 
Al finalizar mostrar el resultado con 
alert() o console.log() */

let fecha = new Date()
let año = fecha.getFullYear()

let nombre = prompt ('Ingresá tu Nombre:') 
let nacimiento = prompt ('Ingresá tu Año de Nacimiento:')
nacimiento = parseInt (nacimiento)
    
let edad = año - nacimiento

let mensaje =
    alert('Hola ' + nombre + ", se que tenes " + edad + " años, yo lo se todo.")

let info = [nombre, nacimiento, edad]

console.log(info)

for (let i = 0; i < info.length; i++) {
    console.log(info[i] + ': ' + typeof(info[i]))
}