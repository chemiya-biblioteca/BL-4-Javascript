//@@@###$$$----------clase de otra forma------------@@@###$$$
function rectangulo(base,altura){
	var base = base;
	var altura = altura;
	this.getBase = function() {return base;}
	this.getAltura = function() {return altura;}	
}

var r1 = new rectangulo(2,6);
console.log("Un rectangulo de " + r1.getBase() + "x" + r1.getAltura());


//@@@###$$$----------clase con atributos privados------------@@@###$$$
class Cafetera{
    #agua=200;
    #fixAgua(value){
        if(value<this.#agua){
            return value;
        }else{
            return 0;
        }
    }

    setAgua(value){
        this.#agua=this.#fixAgua(value);
        console.log("nivel a :"+this.#agua)
    }
}

var caf=new Cafetera();
caf.setAgua(300);



