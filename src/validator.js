const validator = {
  isValid: (numerotarjeta) => {
    // validamos si el numero ingresado tiene 16 caracteres
    if (numerotarjeta.length === 16) {

      // dividimos el numero de la tarjeta en un arreglo, para separar por caracteres
      let numerotarjetaarreglo = numerotarjeta.split('');

      //recorrer los elementos del arreglo, donde indice indica el inicio,
      //numerotarjetaarreglo.length el numero de vueltas que dará, y el indice++
      //es para indicar como incrementará el valor del indice
      for (let indice = 0; indice < numerotarjetaarreglo.length; indice++) {

        //indices en posicion par
        //% es para obtener el resto para ver si es par o no
        if (indice % 2 === 0) {

          //trabaja en conjunto con el for, por cada vuelta obtengo el ValorDePosicion
          let ValorDePosicion = numerotarjetaarreglo[indice];

          //el indice al ser par se multiplica por dos
          let resultadoMultiplicacionPosicion = ValorDePosicion * 2;

          //si la multi´plicacion es mayor a 9 ....
          if (resultadoMultiplicacionPosicion > 9) {

            //convierto el numero en letras (string)....
            let resultadoindiceString = String(resultadoMultiplicacionPosicion);

            //separo las letras....
            let resultadoindiceArreglo = resultadoindiceString.split('');

            //los paso a numero y se suman....
            let resultado = Number(resultadoindiceArreglo[0]) + Number(resultadoindiceArreglo[1]);

            //esa sumatoria la paso a texto y reemplazo el valor de la posicion por ese resultado.
            numerotarjetaarreglo[indice] = String(resultado);

          } else {

            //de lo contrario (si el resultado de la multiplicacion es menor a 9), se deja el numero y se reemplaza
            numerotarjetaarreglo[indice] = String(resultadoMultiplicacionPosicion);
          }
        }
      }
      let sumaTarjeta = 0;

      for (let indice = 0; indice < numerotarjetaarreglo.length; indice++) {
        let ValorDePosicion = numerotarjetaarreglo[indice];
        sumaTarjeta = sumaTarjeta + Number(ValorDePosicion);
      }

      if (sumaTarjeta % 10 === 0) {
        return true;
      } else {
        return false;
      }


    } else {
      return false;
    }
  },
  maskify: (numerotarjeta) => {
    //para obtener los ultimos 4 numeros//
    let ultimonumero = numerotarjeta.substr(-4);

    //saber cuantos caracteres quedan sin contar, los ultimos 4 que quedaran visibles//
    let cantidadcaracteres = (numerotarjeta.length) - 4

    //para que en cada vuelta vaya agrupando los resultados entregados//
    let nocultos = "";

    for (let indice = 0; indice < cantidadcaracteres; indice++) {

      
      nocultos = nocultos + "#";

    }
//tiene que estar fuera del for para que este puda hacer todo el proceso 
//y me entregue el valor solicitado, de lo contrario si el return se encuentra 
//dentro del for este darà una sola vuelta ya que va a entregar un valor
    return nocultos + ultimonumero;

  },
  email: (correo) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test (correo)
  }
  // ...
};

export default validator;

// obtener los ultimos 4 caracteres del texto
// debemos contar cuantos caracteres tiene el texto - 4
// un for que agregue a un texto un # por la resta anterior
