const validator = {

  //Validando longitud del string para 16 dígitos
  stringLenght: function (cardLength) {
    let length = cardLength.length; //console.log(length);
    if (length === 16) {
      return true;
    } else {
      //alert("No cumple requisito de caracteres");
      return false;
    }
  },

  //Validando que el string contenga únicamente valores numéricos
  isANumber: function (number) {
    let regex = new RegExp("^[0-9]*$");
    if (regex.test(number) === false) {
      //alert("Solo ingresar números");
      return false;
    } else {
      return true;
    }
  },

  //Validando Algoritmo de Luhn
  luhnValidation: function (ccnumber) {
    let twoDigits = []; // dos dígitos y pasan a tener uno de nuevo.
    let oneDigit = []; //
    
    for (let i = 0; i <ccnumber.length; i++) {
      //console.log(ccnumber[i]); //funciona, muestra los número de la tc
      if (i % 2 === 0) {
        let byTwo = ccnumber[i] * 2; //console.log(byTwo); //recibo la multiplicación de los números

        if (byTwo > 9) {
          byTwo = byTwo.toString();
          byTwo = parseInt(byTwo.charAt(0)) + parseInt(byTwo.charAt(1)); //console.log(byTwo);  //al principio lo había dejado solo con el charAt, y no salía porque claro lo estaba manejando como string, entonces solo concatenaba el 1er caracter con el segundo.
          twoDigits.push(byTwo);
        } else {
          byTwo;
          oneDigit.push(byTwo);
        }
      } else {
        //esto no me funcinaba al principio porque estaba queriendo hhacerlo después del primer if, es decir, cortaba ambos if, quedando fuera de un mismo contexto ambos
        let byOne = ccnumber[i] * 1;
        oneDigit.push(byOne);
      }
    }

    let sumTwoDigits = 0;
    for (let i = 0; i < twoDigits.length; i++) {
      sumTwoDigits = sumTwoDigits + twoDigits[i];
    }
    //console.log(sumTwoDigits); Ok

    let sumOneDigit = 0;
    for (let i = 0; i < oneDigit.length; i++) {
      sumOneDigit = sumOneDigit + oneDigit[i];
    }
    //console.log(sumOneDigit); Ok
    //console.log(twoDigits); Ok
    //console.log(oneDigit); OK

    let sum = sumTwoDigits + sumOneDigit;
    //console.log(sum); Ok

    if (sum % 10 === 0) {
      //alert("Cumple Luhn");
      return true;
    } else {
      //alert("No cumple Luhn");
      return false;
    }
  },

  isValid: function (creditCardNumber) {
    if (
      validator.stringLenght(creditCardNumber) === true &&
      validator.isANumber(creditCardNumber) === true &&
      validator.luhnValidation(creditCardNumber) === true
    ) {
      alert("TC VÁLIDA");
      return true;
    } else {
      alert("TC NO VÁLIDA");
      return false;
    }
  },

<<<<<<< HEAD


  //Ouch! esto solo sirve para tarjetas de 16 dígitos
  /*luhnValidation: function (values) {
    for (let i = 0; i < values.length; i++) {
      if (i % 2 === 0) {
       //console.log(i); //tengo los índices pares, pero necesito el dígit(número) que está en esa posición: 
      //console.log(values.charAt(i)); //valido que efectivamente estoy sacando los números que están en las posiciones pares
      let evenNumber = values.charAt(i)*2;
      //console.log(evenNumber);
      }
    }
  }
*/
=======
  maskify: function (creditCardNumber) {
    let lastFourDigits = creditCardNumber.slice(-4);
    let firstDigits = creditCardNumber.slice(0,-4);
  },
    
  //console.log(lastFourDigits);
>>>>>>> versionsr2


  // ...
};

export default validator;

/* Mi antigua funcion para validar que el valor ingresado es numérico/digits.
   function (number) {
    console.log(this.stringLenght(number));
    if (isNaN(number) {
      alert("Solo acepta números");
      return true;
    }
  }, */
