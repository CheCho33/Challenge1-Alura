
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
      
      if (texto[i] == codigoSecreto[j][0]) {
        textoNuevo = textoNuevo + codigoSecreto[j][1];
        cambioLetra = true;
        break;
      } else {
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