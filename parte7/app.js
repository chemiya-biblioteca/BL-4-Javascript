//@@@###$$$----------eventos boton------------@@@###$$$

function countRabbits() {
    for (let i = 1; i <= 3; i++) {
        console.log("Conejo número " + i);
    }
}


elem.onclick = function () {
    console.log('¡otro!');
};


elem1.addEventListener("click", () => console.log('¡listener!'));



//@@@###$$$----------carga pagina------------@@@###$$$
document.addEventListener("DOMContentLoaded", function () {
    console.log("construccion");
});


//@@@###$$$----------validacion tecla------------@@@###$$$
function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || ['+', '(', ')', '-'].includes(key);
}

entrada.oninput = function () {
    result.innerHTML = entrada.value
}

//@@@###$$$----------cambio select------------@@@###$$$
function cambio() {
    resultSelect.innerHTML = select.value;
}


//@@@###$$$----------validar formulario------------@@@###$$$
function myFunction() {
    alert("The form was submitted");
}


//validar formulario
function validacion() {
    valor = document.getElementById("validar").value;
    if (valor == null || valor.length == 0) {
        console.log("vacio");
        return false;
    } else {
        alert("The form was submitted");
    }
}

 

//@@@###$$$----------localstorage y otra validacion------------@@@###$$$
var form = document.getElementById("form");
var validarOtro = document.getElementById("validarOtro");
let variable="usuario"
localStorage.setItem("nombre",variable)

form.addEventListener("submit",e=>{
    e.preventDefault()
    if(validarOtro.value.length<1){
        console.log("no se puede")
    }else{
        console.log("enviado")
        
        console.log(localStorage.getItem("nombre"))
    }
})


//@@@###$$$----------crear html de array------------@@@###$$$
let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
   
  ]

  let contenedor=document.getElementById("contenedor");
  let divNuevo=document.createElement("div")
  divNuevo.className="elemento"
  divNuevo.innerHTML=`
    <p>${cars[0].color}</p>
    <button onclick="pulsar(${cars[0].capacity})">boton</button>
    
  `
  contenedor.appendChild(divNuevo)

  function pulsar(id){
    console.log(id)
  }

