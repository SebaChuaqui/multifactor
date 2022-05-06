let multiplicaciones = document.getElementById('multiplicaciones')
let factoriales = document.getElementById('factoriales')
let salida = document.getElementById('salida')
let btnCalcular = document.getElementById('calcular')
let usuario = document.getElementById('usuario')
let mensaje = document.getElementById('mensaje')

btnCalcular.addEventListener('click', () => {
    let usuarioVal = parseInt(usuario.value)
    validaNumero(usuarioVal)
})

const validaNumero = (numero) => {
    if (numero < 1 || numero > 20) {

        mensaje.classList.add('show')
        setTimeout( () => {
            mensaje.classList.remove('show')
        }, 2000)
        mensaje.textContent = 'El numero ingresado esta fuera del rango!'

    } else {

        salida.classList.add('show')
        let factorial = 1
        for (let i = 1; i <= numero; i++) {
            
            let multiItem = document.createElement('li')
            let multiVal = `${i} x ${numero} = ${ i * numero }`
            multiItem.textContent = multiVal
            multiplicaciones.appendChild(multiItem)
            
            let factorialItem = document.createElement('li')
            let factorialVal = `Factorial de ${i} es: ${ factorial = factorial * i }`
            factorialItem.textContent = factorialVal
            factoriales.appendChild(factorialItem)

        }

    }
}