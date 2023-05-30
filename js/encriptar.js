
var ParrafoInicial = document.querySelector(".text-ingreso");
var ParrafoResultado = document.querySelector(".text-respuesta");
var mensaje1 = document.getElementById("mensaje1");
var mensaje2 = document.getElementById("mensaje2");
var imgMuneco = document.getElementById("img-muneco");



function encriptadoTexto(){
  if(revisarTexto(ParrafoInicial.value)){
    ParrafoResultado.value = encriptar(ParrafoInicial.value);
    mensaje2.style.display = "none";
    imgMuneco.style.display = "none";
    
  } else{
    alert("El texto contiene acentos o caracteres especiales");
    mensaje1.style.display = "block";
    mensaje2.style.display = "none";
  }
  if(ParrafoInicial.value== ""){
    mensaje1.style.display = "block";
    imgMuneco.style.display = "block";
  }
}

function desencriptarTexto(){
  if(revisarTexto(ParrafoInicial.value)){
    ParrafoResultado.value = desencriptar(ParrafoInicial.value);
  } else{
    alert("El texto contiene acentos o caracteres especiales");
  }
}

function copiarTextoEncriptado(){
  ParrafoInicial.value = ParrafoResultado.value;
}

function revisarTexto(texto){
  var expr1 = /[áéíóú!@#$%^&*()_+\-={}[\]\\|;:'",.<>/?1234567890A-Z]/g;
  if (expr1.test(texto)) {
    return false; 
  } else {
    return true;
  }
}


function encriptar(texto){
  let codigoSecreto = [["e", "enter"], ["i", "imes"], ["a", "ui"], ["o", "ober"], ["u", "ufat"]];
  var textoNuevo ="";
  var cambioLetra= false;

  for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < codigoSecreto.length; j++){
      
     // console.log("inicioamos = " + texto);
      //console.log("inicioamosNuevo = " + textoNuevo);
      if (texto[i] == codigoSecreto[j][0]) {
        textoNuevo = textoNuevo + codigoSecreto[j][1];
        cambioLetra = true;
        break;
      } else {//debo poner la condicion que solo entre cuando este al final
        cambioLetra = false;
      }      
    }
    if (!cambioLetra) {
      textoNuevo = textoNuevo + texto[i];
      console.log("son diferente");
    }
  }
  return textoNuevo;
}

function desencriptar(texto){
  let codigoSecreto = [["e", "enter"], ["i", "imes"], ["a", "ui"], ["o", "ober"], ["u", "ufat"]];
  var textoNuevo ="";
  var cambioLetra= false;

  for (let i = 0; i < codigoSecreto.length; i++) {
    textoNuevo = texto.replace(codigoSecreto[i][1], codigoSecreto[i][0]);
    texto = textoNuevo;
  }
  return textoNuevo;
}





/*
//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")*/

