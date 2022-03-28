import validator from './validator.js';

document.getElementById("validar").addEventListener('click', () => {

  let nusuario = document.getElementById('nombre').value;

  //obtener el valor ingresado en el numero de tarjeta//
  let valortarjeta = document.getElementById('ntarjeta').value;

  // llamar funcion validartarjeta
  let esvalida = validator.isValid(valortarjeta);

  if (esvalida) {
    alert('Tarjeta de Credito Valida, ' + nusuario + ' su reserva se ha realizado exitosamente.');
  } else {
    alert('Tarjeta de Credito Invalida, ' + nusuario + ' intente nuevamente.')
  }


});
