/*
@@@###$$$----------varibles------------@@@###$$$

Var: local o global, inician undefined
Let: local(bloque), no se inicializa
Const: local(bloque), no se pueden modificar



*/






//@@@###$$$----------cuadro alertas------------@@@###$$$
alert("hola")

let test=prompt("test")

let esjefe=confirm("eres jefe")

alert(typeof esjefe)



//@@@###$$$----------conversion tipos------------@@@###$$$

let num=Number("23")
let valor=String("23")



//@@@###$$$----------or------------@@@###$$$
if(num>20 || num<30){
    console.log("en intervalo")
}



//@@@###$$$----------comparacion ==------------@@@###$$$
console.log("igual doble o triple")
console.log(0==false)
console.log(0===false)


//@@@###$$$----------if the una linea-----------@@@###$$$
let acceso=(num>20)?true:false



//@@@###$$$----------while------------@@@###$$$
let sum = 0;

while (true) {

  let value = prompt("Ingresa un número", '');
  value=Number(value)

  if (!value) break; // (*)

  sum += value;

}
alert( 'Suma: ' + sum );




//@@@###$$$----------for con continue------------@@@###$$$
for (let i = 0; i < 10; i++) {

    // si es verdadero, saltar el resto del cuerpo
    if (i % 2 == 0) continue;
  
    console.log(i); // 1, luego 3, 5, 7, 9
  }




  //@@@###$$$----------switch------------@@@###$$$
  let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Muy pequeño' );
    break;
  case 4:
    console.log( '¡Exacto!' );
    break;
  case 5:
    alert( 'Muy grande' );
    break;
  default:
    alert( "Desconozco estos valores" );
}
