
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

  let correo = document.getElementById('correo').value;
  if(!validator.email(correo)){
    alert('Debe ingresar un correo valido');
    return;

  }

  let nusuario = document.getElementById('nombre').value;

  //obtener el valor ingresado en el numero de tarjeta//
  let valortarjeta = document.getElementById('ntarjeta').value;

  // llamar funcion validartarjeta
  let esvalida = validator.isValid(valortarjeta);


  if (esvalida) {

    let tipotarjeta = tipoTC.tipoTarjeta(valortarjeta);


    if ( tipotarjeta === "" ){
      alert( validator.maskify(valortarjeta) + ' ' + tipoTC.tipoTarjeta(valortarjeta)  + ' es INVÁLIDA, ' + nusuario + ' intente nuevamente.')
    }else{
      alert( validator.maskify(valortarjeta) + ' ' +  tipotarjeta + ' es VÁLIDA, ' + nusuario + ' su reserva se ha realizado exitosamente. El comprobante de reserva será enviado al correo indicado anteriormente.');
      window.location.href = "http://localhost:3000 " 
    }



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
    return ("tarjeta de crédito VISA");
  }
  else if (resultado === 5){
    return ("tarjeta de crédito MASTERCARD");
  }
  else if (resultado === 6){
    return ("tarjeta de crédito DISCOVER");
  }
  else if (resultado === 3){
    return ("tarjeta de crédito AMERICAN EXPRESS");
  }
  else {
    return "";
  }
}
else {
  return "";
}
}
}



const calendario = {
  fechahoy : () =>{
    
    //obtenemos fecha actual//
    const fecha = new Date();
    let fechaespañol = fecha.toLocaleDateString('es-es');
    let fechaseparada = fechaespañol.split("/");

    let dia = fechaseparada[0];
    let mes = fechaseparada[1];
    let anhio= fechaseparada[2];

    if (dia.length === 1){
      dia = '0' + dia;
    } 
    
    if (mes.length === 1){
      mes = '0' + mes;
    } 

    let fechahoy = anhio + '-' + mes + '-' + dia

    var input = document.getElementById("fecha");
    input.setAttribute("min", fechahoy);
  },


  fechamax : () =>{
    
    //obtenemos fecha actual//
    const fecha = new Date();
    let fechamaxespañol = fecha.toLocaleDateString('es-es');
    let fechamaxseparada = fechamaxespañol.split("/");

    let diamax = fechamaxseparada[0];
    let mesmax = String (Number (fechamaxseparada[1]) + 1);
    let anhiomax= fechamaxseparada[2];

    if (diamax.length === 1){
      diamax = '0' + diamax;
    } 
    
    if (mesmax === "13"){
      mesmax = "01";
      anhiomax = String(Number (anhiomax) + 1)

    }


    if (mesmax.length === 1){
      mesmax = '0' + mesmax
    } 

    let fechamax = anhiomax + '-' + mesmax + '-' + diamax
    console.log(fechamax);
    var input = document.getElementById("fecha");
    input.setAttribute("max", fechamax);
  }


} 
calendario.fechahoy();
calendario.fechamax();