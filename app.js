/*Este programa tiene que ser capaz de encriptar un texto que ingrese
el usuario, y a su vez tiene que ser capaz de volver a desencriptarlo*/

/*Reglas que tiene que seguir el codigo
la letra "e" tiene que ser convertida a "enter";
la letra "i" tiene que ser convertida a "imes";
la letra "a" tiene que ser convertida a "ai";
la letra "o" tiene que ser convertida a "ober";
la letra "u" tiene que ser convertida a "ufat";

Ademas solo deebe funcionar con letras minúsculas,
tampoco tienen que tener tilde, ni caracteres especiales*/


let textoIngresado = "holA buenos dias";

function splitArr(texto) {

    let arrayText = textoIngresado.split("");
    console.log(arrayText);
 
}

function mayusYCaract() {

    let incluyeMayusYCaract = splitArr().includes("QWERTYUIIOPASDFGHJKLÑZXCVBNM,.-+!·$%&/()=?¿ª");

    console.log(mayusYCaract);
}

console.log(splitArr(textoIngresado));

console.log(mayusYCaract);