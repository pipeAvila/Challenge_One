const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const palabra = document.querySelector(".palabras");
const pegar = document.querySelector(".btn-pegar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    palabra.style.visibility = "hidden";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } 
    return stringDesencriptada;
}


function btnCopiar() {
    // Mostramos el boton cuando se hace clic en el

    const stringEncriptada = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(stringEncriptada);

    // Aqui se activa el boton pegar
    document.querySelector(".btn-pegar").style.display = "block";
    
    
    // Aqui puedes agregar cualquier otra accion que quieras realizar
}

function btnPegar(){
    navigator.clipboard.readText().then(
        (clipText) => (textArea.innerText = clipText)
    );
}