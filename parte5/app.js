
//@@@###$$$----------acceso por id------------@@@###$$$
let elem=document.getElementById("titulo");
elem.innerHTML="cambiado"
elem.style.background="red"



//@@@###$$$----------query selector------------@@@###$$$
let elements = document.querySelectorAll('ul > li:last-child');

for (let elem of elements) {
  console.log(elem.innerHTML); // "prueba", "pasado"
}

let chapter = document.querySelector('.chapter'); 
chapter.innerHTML="query"




//@@@###$$$----------tagname------------@@@###$$$
let inputs = table.getElementsByTagName('input');

  for (let input of inputs) {
    console.log( input.value + ': ' + input.checked );
  }



  //@@@###$$$----------name y classname------------@@@###$$$
  let form = document.getElementsByName('my-form')[0];

  // encontrar por clase dentro del formulario
  let articles = form.getElementsByClassName('article');
  console.log("articles: "+articles.length); // 2, encontró dos elementos con la clase "article"





  //@@@###$$$----------crear elemento y anadir------------@@@###$$$
  let div=document.createElement("div")
  div.className="alerta"
  div.innerHTML="mensaje"

  document.body.append(div)

  let li=document.createElement("li")
  li.innerHTML="li en javascript"

 
  list.appendChild(li);

  function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  

 //@@@###$$$----------timeout------------@@@###$$$
  setTimeout(sayHi, 5000, "Hola", "John"); // Hola, John

  setTimeout(() => alert('Hola'), 8000);


  let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);

