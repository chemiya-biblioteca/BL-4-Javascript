
//@@@###$$$----------conversion json string------------@@@###$$$
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); // ¡obtenemos un string!
  
  console.log("json convertido: "+json);


  let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log("primero del json "+ user.friends[1] );




//@@@###$$$----------argumentos indefinidos de entrada------------@@@###$$$
function sumAll(...args) { // args es el nombre del array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log("primero suma "+ sumAll(1) ); // 1
  console.log( "seg suma "+sumAll(1, 2) ); // 3
  console.log("terc suma "+ sumAll(1, 2, 3) ); // 6



  function showName(firstName, lastName, ...titles) {
    console.log ( firstName + ' ' + lastName ); // Julio Cesar
  
    // el resto va en el array titles
    // por ejemplo titles = ["Cónsul", "Emperador"]
    console.log( "prim "+titles[0] ); // Cónsul
    console.log( "seg "+ titles[1] ); // Emperador
    console.log( "tec "+ titles.length ); // 2
  }
  
  showName("Julio", "Cesar", "Cónsul", "Emperador");




 //@@@###$$$----------try catch------------@@@###$$$
  let jsonConv = "{ json malo }";

try {

  let user3 = JSON.parse(jsonConv); // <-- cuando ocurre un error ...
  alert( user3.name ); // no funciona

} catch (err) {
  // ...la ejecución salta aquí
  console.log( "Nuestras disculpas, los datos tienen errores, intentaremos solicitarlos una vez más." );
  console.log( err.name );
  console.log( err.message );
}


try {
    console.log( 'intenta (try)' );
    if (confirm('¿Cometer un error?')) BAD_CODE();
  } catch (err) {
    console.log( 'atrapa (catch)' );
  } finally {
    console.log( 'finalmente (finally)' );
  }





  //@@@###$$$----------lanzar error------------@@@###$$$
  let jsonNuevo = '{ "age": 30 }'; // dato incompleto

try {

  let user = JSON.parse(jsonNuevo); // <-- sin errores

  if (!user.name) {
    throw new SyntaxError("dato incompleto: sin nombre"); // (*)
  }

  alert( user.name );

} catch (err) {
 console.log( "Error en JSON: " + err.message ); // Error en JSON: dato incompleto: sin nombre
}




//@@@###$$$----------clase de error------------@@@###$$$
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  // Uso
  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new ValidationError("Sin campo: age");
    }
    if (!user.name) {
      throw new ValidationError("Sin campo: name");
    }
  
    return user;
  }
  
  // Ejemplo de trabajo con try..catch
  
  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
     console.log("Dato inválido: " + err.message); // Dato inválido: sin campo: nombre
    } else if (err instanceof SyntaxError) { // (*)
      alert("Error de sintaxis JSON: " + err.message);
    } else {
      throw err; // error desconocido, vuelva a lanzarlo (**)
    }
  }