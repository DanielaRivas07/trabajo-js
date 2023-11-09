
function verifica(){
    let numero = parseInt(document.getElementById("entrada").value);
    let indicadorPrimo = true;
    let salida = "";

    if(numero == 1){
        salida = "1 no es un numero primo";
    } else if (numero > 1){
        for (let i = 2; i < numero; i++){
            if ( numero % i == 0){
                indicadorPrimo = false;
                break;
            }
        }
        if(indicadorPrimo){
            salida = `${numero} es primo`;
        } else{
            salida = `${numero}  no es primo`;
        }
    } else{
        salida =`${numero } no es primo.`;

    }

    document.getElementById("text-salida").innerHTML = salida;
}

function sumarRango(){

    let entrada1 = parseInt(document.getElementById("entrada1").value);
    
    let entrada2 = parseInt(document.getElementById("entrada2").value);
    
    let sumatoria = 0;
    
    let salida2 = "La sumatoria del rango es: ";
    
    for(let i = entrada1; i <= entrada2; i++){ 
        sumatoria += i;
    }
    
    document.getElementById("text-salida2").innerHTML =  sumatoria
    
}


function cuentaVocales(){

    let cadena = document.getElementById("texto-cadena").value; 
    let vocales = ["a", "e", "i", "o", "u"]; 
    let numeroVocales = 0;
    
    for(let letra of cadena.toLowerCase()){ if(vocales.includes (letra)){ numeroVocales++ }
    }

    document.getElementById("text-salida3").innerHTML = `La cadena contiene ${numeroVocales} vocales.`;
}

function invertirCadena(texto){ 
    
    let resultado = '';

    for (let i = texto.length - 1; i >= 0; --i) {
         resultado += texto[i];

}

return resultado;

}

console.log(invertirCadena ('hotel'));


var button = document.getElementById("cambiar-texto"); 
var texto = document.getElementById("texto");

button.addEventListener("click", function() {

var textonormal = parseInt(getComputedStyle(texto).fontSize); 
var textonuevo = textonormal + 5;

texto.style.fontSize = textonuevo + "px"; });


   
