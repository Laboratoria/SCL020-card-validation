import validator from './validator.js';

//console.log(validator);


let botonvalidar = document.getElementById("botonvalidar");
botonvalidar.addEventListener("click", (event)=>{
  event.preventDefault();
 let numero = document.getElementById("numero").value;
 let numero2=  document.getElementById("numero").value;
 validator.isValid(numero);

 if (validator.isValid(numero) == true){
  alert("¡tarjeta valida!"); 
} else {
  alert("tarjeta invalida. ¡Intenta otra vez!");
}
document.getElementById("numero").value = validator.maskify(numero2);



})
