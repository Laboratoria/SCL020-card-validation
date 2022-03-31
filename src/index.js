
import validator from './validator.js';

document.getElementById("validar").addEventListener('click', () => {


  let digitos = document.getElementById('ntarjeta').value;
  if (digitos=="") {
    alert ('Debe ingresar numero de tarjeta');
    return;
  }

  let nombreyapellido = document.getElementById('nombre').value;
  if (nombreyapellido=="") {  
    alert ('Debe ingresar Nombre y Apellido');
    return;
  }
  
  let fven = document.getElementById('fechavencimiento').value;
  if (fven=="") {
    alert ('Debe ingresar Fecha de Vencimiento');
    return;
  }

  let codigo = document.getElementById('digito').value;
  if (codigo=="") {
  alert ('Debe ingresar CVV');
  return;

  }


  let nusuario = document.getElementById('nombre').value;

  //obtener el valor ingresado en el numero de tarjeta//
  let valortarjeta = document.getElementById('ntarjeta').value;

  // llamar funcion validartarjeta
  let esvalida = validator.isValid(valortarjeta);

  if (esvalida) {
    alert ( validator.maskify(valortarjeta) + ' Tarjeta de Credito Valida, ' + nusuario + ' su reserva se ha realizado exitosamente.');
  } else {
    alert ( validator.maskify(valortarjeta) +'Tarjeta de Credito Invalida, ' + nusuario + ' intente nuevamente.')
  }
});
