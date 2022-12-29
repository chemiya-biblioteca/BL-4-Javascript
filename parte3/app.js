//@@@###$$$----------clase------------@@@###$$$
class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }
  



//@@@###$$$----------ordenar array de objetos------------@@@###$$$
  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];
  
  articles.sort(Article.compare);
  
  alert( articles[0].title ); // CSS



//@@@###$$$----------operaciones obre strings------------@@@###$$$
  let nombre="hello\n"
  let nombre1="hello"

  console.log(nombre==nombre1)

  console.log(nombre[0])
  console.log(nombre.charAt(0))
  console.log(nombre1[nombre1.length-1])

  console.log("indice: "+nombre.indexOf("llo"))
  console.log("include: "+nombre.includes("lo"))

  let str="stringfy"
  console.log("uso slice")
  console.log(str.slice(0,5))
  console.log(str.slice(2))
  console.log(str.substring(2,6))


  let nombres='bil,jan,est'
  let arr=nombres.split(",")
  for(let name of arr){
    console.log(`encontre ${name}`)
  }




//@@@###$$$----------operaciones sobre listas------------@@@###$$$
  let fruits = ["Apple", "Orange", "Plum"];

  console.log( fruits[0] ); // Apple
  console.log( fruits[1] ); // Orange
  console.log( fruits[2] ); // Plum

  console.log("longitud: "+ fruits.length );

  console.log("pop "+ fruits.pop() );



 //@@@###$$$----------recorrer listas------------@@@###$$$
fruits.push("Pear");
console.log("recorrer of")
for (let fruit of fruits) {
    console.log( fruit );
  }
  console.log("recorrer in")
  for (let key in arr) {
    console.log( arr[key] ); // Apple, Orange, Pear
  }

  fruits.forEach((item,index,fruits)=>{
    console.log(`estoy en ${item} con ${index} en ${fruits}`)
  })



  //@@@###$$$----------splice listas------------@@@###$$$
  arr.splice(1,1)//desde el 1 borro 1
  arr.splice(0, 3, "a", "bailar");//quito los 3 primeros y los reemplazo
  arr.splice(2, 0,"el", "complejo", "language");//desde el 2 inserto 3
  console.log("me queda: "+arr)


//@@@###$$$----------array json y operaciones: find, filter y map------------@@@###$$$
  let users = [
    {id: 1, name: "Celina"},
    {id: 2, name: "David"},
    {id: 3, name: "Federico"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  console.log("en find: "+user.name); // Celina

  let someUsers = users.filter(item => item.id < 3);

  console.log("en filter: "+someUsers.length);


let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log("longiutd: "+lengths); // 5,7,6



//@@@###$$$----------comparar array de otra manera------------@@@###$$$
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let arr1 = [ 1, 2, 15 ];
  
  arr1.sort(compareNumeric);
  
  console.log("ordeno: "+arr1);  // 1, 2, 15


  let arr2 = [1, 2, 3, 4, 5];

let result = arr2.reduce((sum, current) => sum + current, 0);

console.log("reduce: "+result); // 15




//@@@###$$$----------mapas------------@@@###$$$
let map = new Map();

map.set('1', 'str1');   // un string como clave
map.set(1, 'num1');     // un número como clave
map.set(true, 'bool1'); // un booleano como clave


console.log("cojo 1:"+ map.get(1)   ); // 'num1'
console.log("cojo 1text:"+ map.get('1') ); // 'str1'

console.log("cojo tam:"+ map.size ); // 3


map.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); 
  });


  let obj = {
    name: "John",
    age: 30
  };
  
  let map2 = new Map(Object.entries(obj));
  
  console.log("de entrada: "+ map2.get('name') ); // John




//@@@###$$$----------set------------@@@###$$$
  let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visitas, algunos usuarios lo hacen varias veces
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set solo guarda valores únicos
console.log("tam set:"+ set.size ); // 3

for (let user of set) {
    console.log("nombre en set:"+user.name); // John (luego Pete y Mary)
}




//@@@###$$$----------desestructuras------------@@@###$$$
let arrDes = ["John", "Smith"]

// asignación desestructurante
// fija firstName = arr[0]
// y surname = arr[1]
let [firstName, surname] = arrDes;

console.log("nombre desec:"+firstName); // John
console.log(surname);  // Smith


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// `rest` es un array de ítems, comenzando en este caso por el tercero.
console.log("desec..."+rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2



//@@@###$$$----------fecha------------@@@###$$$
let date = new Date("2017-01-26");

let date1 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log("fecha hora:"+ date1 ); // 1.01.2011, 02:03:04.567



