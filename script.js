const TextArea = document.querySelector(".TextArea");
const resuelto = document.querySelector(".resuelto");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function botEncriptar(){
    const textoEncriptado = encriptar(TextArea.value)
    resuelto.value = textoEncriptado
    TextArea.value = "";
    resuelto.style.backgroundImage= "none";
}

function encriptar(stringEncriptado){

let martirzcodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
stringEncriptado =stringEncriptado.toLowerCase()

for(let i = 0; i < martirzcodigo.length; i++){
    if(stringEncriptado.includes(martirzcodigo[i][0])){
        stringEncriptado =  stringEncriptado.replaceAll(martirzcodigo[i][0],martirzcodigo[i][1])
    }
}
return stringEncriptado
}

function botDesencriptar(){
    const textoEncriptado = desencriptar(TextArea.value)
    resuelto.value = textoEncriptado
    TextArea.value = "";
    
}


function desencriptar(stringDesencriptado){

    let martirzcodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringDesencriptado =stringDesencriptado.toLowerCase()
    
    for(let i = 0; i < martirzcodigo.length; i++){
        if(stringDesencriptado.includes(martirzcodigo[i][1])){
            stringDesencriptado =  stringDesencriptado.replaceAll(martirzcodigo[i][1],martirzcodigo[i][0])
        }
    }
    return stringDesencriptado

    }

    function copiarAlPortapapeles() {
        // Obtener el elemento <textarea> por su id
        let textarea = document.getElementById("encriptado");
      
        // Seleccionar el contenido del <textarea>
        textarea.select("encriptado");
        textarea.setSelectionRange(0, 99999); // Para dispositivos móviles
      
        // Copiar el contenido seleccionado al portapapeles
        document.execCommand("copy");
      
        // Deseleccionar el texto
        textarea.blur();
      
        // Alerta o mensaje de confirmación
        alert("El contenido ha sido copiado al portapapeles.");
    }

    