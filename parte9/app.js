
//@@@###$$$----------crear html pidiendo de api------------@@@###$$$
let archivos = document.getElementById("archivos")

fetch('https://jsonplaceholder.typicode.com/posts')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(data => {

        data.forEach(element => {

            let div = document.createElement("div")
            div.innerHTML = `
        <h1>${element.title}</h1>
        <p>${element.body}</p>
        
        `

            archivos.append(div)
        });




    })    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores



//@@@###$$$----------callback------------@@@###$$$
const operacion = (numero1, numero2, callback) => {
    return callback(numero1, numero2)
}

var res = operacion(1, 3, (a, b) => a + b)
console.log(res)


const operacion1 = (numero1, numero2, callback) => {
    return setTimeout(()=>{
        callback(numero1, numero2)
    },4000)
    
}
operacion1(1, 3, (a, b) =>{
    console.log(a+b)
})


const promise=(numero1,numero2)=>{
    const resultado=numero1+numero2
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(resultado)
        },6000)
    })
}

promise(1,3)
.then(result=>console.log(result))

