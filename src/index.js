// importamos el archivo validator
import validator from './validator.js';

// referencia del formulario obtenida a través del id del formulario (ver html)
const form = document.getElementById("paymentForm")

// referencia al div de error
const errors = document.getElementById("errors")

// referencia a la lista de errores
const errorsList = document.getElementById("errors-list")

function addError(message) {
  errors.classList.remove("hide")
    
  const listElement = document.createElement('li');
  const errorMessage = document.createTextNode(message)
  listElement.appendChild(errorMessage);
  // se agrega al errorsList un nuevo elemento
  errorsList.appendChild(listElement);
}

function clearErrors() {
  errors.classList.add("hide")
  errorsList.innerHTML = "";
  const creditCard = document.getElementById('creditCard')
  creditCard.classList.remove('errors')
}

// evento que captura el envío de un formulario
form.addEventListener('submit', e => {
  // para el comportamiento normal de un formulario
  e.preventDefault();

  // rescata la información del formulario
  const data = Object.fromEntries(new FormData(e.target))
  //const firstName = e.elements.firstName.value

  // Borra los errores anteriores
  clearErrors()
    
  if(!validator.isValid(data.creditCard)) {
    addError('Tu tarjeta de crédito es inválida')
    const creditCard = document.getElementById('creditCard')
    creditCard.classList.add('errors')
  }

  if(!data.firstName) {
    addError('Debes completar tu nombre')
  }

  // completar con otros errores
  console.log(data)
})
