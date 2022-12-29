//@@@###$$$----------promise------------@@@###$$$

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Genial, el script ${script.src} está cargado`);
    alert( _ ); // _ es una función declarada en el script cargado
  });


//@@@###$$$----------clase------------@@@###$$$
  class User {

    constructor(name) {
      // invoca el setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Nombre demasiado corto.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  alert(user.name); // John
  
  user = new User(""); // Nombre demasiado corto.


  class Rabbit {}
let rabbit = new Rabbit();

// ¿Es un objeto de la clase Rabbit?
alert( rabbit instanceof Rabbit ); // verdadero



//@@@###$$$----------herencia------------@@@###$$$
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} corre a una velocidad de ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} se queda quieto.`);
  }
}

let animal = new Animal("Mi animal");


class Rabbit1 extends Animal {
  hide() {
    alert(`¡${this.name} se esconde!`);
  }

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}

let rabbit1 = new Rabbit1("Conejo Blanco",10);

rabbit1.run(5); // Conejo Blanco corre a una velocidad de 5.
rabbit1.hide(); // ¡Conejo Blanco se esconde!