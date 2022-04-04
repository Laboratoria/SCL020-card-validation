
import validator from './validator.js';

document.getElementById("validar").addEventListener('click', () => {

  let correoelectronico = document.getElementById('correo').value;
  if (correoelectronico == "") {
    alert('Debe ingresar un correo electrónico');
    return;
  }

  let digitos = document.getElementById('ntarjeta').value;
  if (digitos == "") {
    alert('Debe ingresar numero de tarjeta');
    return;
  }

  let nombreyapellido = document.getElementById('nombre').value;
  if (nombreyapellido == "") {
    alert('Debe ingresar Nombre y Apellido');
    return;
  }

  let fven = document.getElementById('fechavencimiento').value;
  if (fven == "") {
    alert('Debe ingresar Fecha de Vencimiento');
    return;
  }

  let codigo = document.getElementById('digito').value;
  if (codigo == "") {
    alert('Debe ingresar CVV');
    return;
  }

  let nusuario = document.getElementById('nombre').value;

  //obtener el valor ingresado en el numero de tarjeta//
  let valortarjeta = document.getElementById('ntarjeta').value;

  // llamar funcion validartarjeta
  let esvalida = validator.isValid(valortarjeta);


  if (esvalida) {

    alert( validator.maskify(valortarjeta) + ' ' + tipoTC.tipoTarjeta(valortarjeta)  + ' es VÁLIDA, ' + nusuario + ' su reserva se ha realizado exitosamente. El comprobante de reserva será enviado al correo indicado anteriormente.');
    window.location.href = "http://localhost:3000 "
  } else {
    alert( validator.maskify(valortarjeta) + ' ' + tipoTC.tipoTarjeta(valortarjeta)  + ' es INVÁLIDA, ' + nusuario + ' intente nuevamente.')
  }


});

const tipoTC = {
tipoTarjeta : (numerotarjeta) => {
if (numerotarjeta.length === 16){
  let ntarjetaarreglo = numerotarjeta.split ("");
  let resultado = Number(ntarjetaarreglo[0]);
  if (resultado === 4){ 
    return ("tarjeta de crédito VISA")
  }
  else if (resultado === 5){
    return ("tarjeta de crédito MASTERCARD")
  }
  else if (resultado === 6){
    return ("tarjeta de crédito DISCOVER")
  }
  else if (resultado === 3){
    return ("tarjeta de crédito AMERICAN EXPRESS")
  }
  else {
    alert ("Tarjeta de crédito ingresada no es valida")
  }
}
else {
  alert ("Tarjeta de crédito invalida")
}
}
}
