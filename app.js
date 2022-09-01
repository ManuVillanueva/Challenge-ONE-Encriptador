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


//Variables globales para validar que el texto cumpla con las condiciones
let textoValido = false;


const resultadoEncriptado = document.querySelector(".textarea1");

const resultadoDesencriptado = document.querySelector(".textarea2");

//Función que guarda el texto introducido y evalua que no tenga mayusculas, ni caracteres especiales
function validarTexto() {

    let textoIngresado = document.querySelector(".textarea1").value;

    if (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(textoIngresado) || 
    (/[0-9]/.test(textoIngresado)) || 
    (/[A-Z]/.test(textoIngresado))) {

        alert("No se permiten caracteres especiales, ni mayúsculas");

        textoValido = false;
    }

    else if ((textoIngresado == "")) {

        alert("Ingrese un mensaje para encriptar");
        textoValido = false;
    }

    else {
        textoValido = true;
    }

}

//Funciones para capturar el click de los botones y llamar a las funciones de abajo
function btnEncriptar() {

    const botonEncriptar = encriptar(resultadoEncriptado.value);

    resultadoDesencriptado.value = botonEncriptar;
    ocultarImagen();

    resultadoEncriptado.value = "";

}

function btnDesencriptar() {
    
    const botonDesencriptar = desencriptar(resultadoEncriptado.value);

    resultadoDesencriptado.value = botonDesencriptar;

}

//Función que oculta la imagen del muñeco, cuando se la llama.
function ocultarImagen() {

    let munieco = document.querySelector(".imagen-persona");
    let textoH2 = document.querySelector(".texto-textarea"); 

    munieco.classList.add("ocultar");
    textoH2.classList.add("ocultar");
}

//Función que cambia los valores de los elementos del input
function encriptar() {

    let textoIngresado = document.querySelector(".textarea1").value;

    let textoEncriptado = "";

    validarTexto();
    
    if(textoValido = true) {
        for(var i = 0; i < textoIngresado.length; i++) {

            if(textoIngresado[i] == "a") {
                textoEncriptado = textoEncriptado + "ai";
            }

            else if(textoIngresado[i] == "e") {
                textoEncriptado = textoEncriptado + "enter"
            }

            else if(textoIngresado[i] == "i") {
                textoEncriptado = textoEncriptado + "imes"
            }

            else if(textoIngresado[i] == "o") {
                textoEncriptado = textoEncriptado + "ober"
            }
            else if(textoIngresado[i] == "u") {
                textoEncriptado = textoEncriptado + "ufat"
            }

            else {
                textoEncriptado = textoEncriptado + textoIngresado[i];
            }
        } 
        
    }
    
    return textoEncriptado;
    
}


//Función que reemplaza los elementos previamente cambiado con la función encriptar, para volver a dejarlo como estaba
function desencriptar() {

    let textoIngresado = document.querySelector(".textarea1").value;

    let textoDesencriptado = "";

    for(var i = 0; i < textoIngresado.length; i++) {

        if(textoIngresado[i] == "a") {
            textoDesencriptado = textoDesencriptado + "a";
            i = i +1;
        }

        else if(textoIngresado[i] == "e") {
            textoDesencriptado = textoDesencriptado + "e";
            i = i + 4;
        }

        else if(textoIngresado[i] == "i") {
            textoDesencriptado = textoDesencriptado + "i";
            i = i + 3;
        }

        else if(textoIngresado[i] == "o") {
            textoDesencriptado = textoDesencriptado + "o";
            i = i + 3;
        }
        else if(textoIngresado[i] == "u") {
            textoDesencriptado = textoDesencriptado + "u";
            i = i + 3;
        }

        else {
            textoDesencriptado = textoDesencriptado + textoIngresado[i];
        }
    }

    return textoDesencriptado;
}

//Función que copia el valor del textarea2 y lo guarda en el portapapeles
function copiar() {

    resultadoDesencriptado.select();
    navigator.clipboard.writeText(resultadoDesencriptado.value);
    resultadoDesencriptado.value = "";

    alert("Texto copiado!");
}