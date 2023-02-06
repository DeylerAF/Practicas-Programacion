// 1.- Invertir una cadena usando métodos

const word = "Deyler";

const newWord = word.split("").reverse().join("");
console.log(newWord);

// 2.- Invertir una cadena sin métodos
const palabra = "Deyler";

let nuevaPalabra = "";

for(let c of palabra){
    nuevaPalabra = c + nuevaPalabra;
}

console.log(nuevaPalabra);

// 3.- Contar elementos repetidos usando métodos
const numbers = [1,1,5,2,6,100,100,2,5,5,5,100];

const result = [...new Set(numbers)].map(num=>{
    return {
        element: num,
        count: numbers.filter(n => n === num).length
    }
});

console.log(result);

// 4.- Contar elementos repetidos sin métodos
const números = [1,1,5,2,6,100,100,2,5,5,5,100];

const resultado = [];

for(const num of números){
    let newElement = true;
    for(const res of resultado){
        if(res.element == num){
            res.count++;
            newElement = false;
        }
    }
    if(newElement){
        resultado[resultado.length] = {
            element: num,
            count: 1
        }
    }
}

console.log(resultado);

// 5.- Crear array de elementos separados por espacio usando métodos
const words = "pato perro  águila   oso    gato";

const array = words.replace(/\s+/g, " ").split(" ");
console.log(array);

// 6.- Crear array de elementos separados por espacio sin métodos
const palabras = "pato perro  águila   oso    gato";

const arreglo = []
let w = "";

for(const c of palabras){
    if(c !== " "){
        w += c;
    }else if(w.length > 0){
        arreglo[arreglo.length] = w;
        w = "";
    }
}

if(w.length > 0){
    arreglo[arreglo.length] = w;
}

console.log(arreglo);