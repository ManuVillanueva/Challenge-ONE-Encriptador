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


//Variables globalas para validar que el texto cumpla con las condiciones
let textoValido = false;


//Función que guarda el texto introducido y evalua que no tenga mayusculas, ni caracteres especiales
function validarTexto() {

    let textoIngresado = document.getElementsByClassName("textarea1");

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


//Función que cambia los valores de los elementos del input
function encriptar() {

    let textoIngresado = document.getElementsByClassName("textarea1");

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

    let textoIngresado = document.getElementsByClassName(".textarea2");

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

