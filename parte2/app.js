
//@@@###$$$----------funcion------------@@@###$$$
function showMessage(from, text) { // parámetros: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Ann', '¡Hola!'); // Ann: ¡Hola! (*)
  showMessage('Ann', "¿Cómo estás?"); // Ann: ¿Cómo estás? (**)


  function sum(a, b) {
    return a + b;
  }
  
  let result = sum(1, 2);
  alert( result ); // 3




 //@@@###$$$----------otra forma de llamar------------@@@###$$$
  let hola=function(name){
    alert(`hola ${name}`)
  }

  hola("chema")



  function sayHi() {   // (1) crear
    alert( "Hola en funcion" );
  }
  
  let func = sayHi;    // (2) copiar
  
  func(); // Hola          
  sayHi(); // Hola  



  let sayHi1 = function() { // (1) crea
    alert( "Hola funcion final" );
  };
  
  let func1 = sayHi1;
  func1()



//@@@###$$$----------flecha------------@@@###$$$
  let sumFlecha = (a, b) => a + b;
  alert("sum flecha1:"+ sum(1, 2) ); // 3




  let sayHiFlecha = () => alert("¡Hola!");

  sayHiFlecha();





  let sumOtro = (a, b) => {  // la llave abre una función multilínea
    let result = a + b;
    return result; // si usamos llaves, entonces necesitamos un "return" explícito
  };
  
  alert("sumOtro: "+ sumOtro(1, 2) ); // 3





  //@@@###$$$----------depurar------------@@@###$$$

  //depurar con console.log
  //en navegador, en sources, añadiendo breakpoints y pasando cada instruccion


function hello(name){
  let frase=`hello ${name}`
  debugger;
  sayFrase(frase)
}

function sayFrase(name){
  alert(`***${name}****`)
}

hello("chema")





//@@@###$$$----------objeto simple y recorrerlo------------@@@###$$$
let user={
  name:"jonh",
  age:23
};
alert("tiene estaedad: "+user.age)



let user1 = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user1) {
  // claves
  alert( key );  // name, age, isAdmin
  // valores de las claves
  alert( user1[key] ); // John, 30, true
}
