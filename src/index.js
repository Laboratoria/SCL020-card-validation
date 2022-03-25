
function ObtenerTexto() {
    
    let nusuario = document.getElementById('nombre').value;

    //obtener el valor ingresado en el numero de tarjeta//
    let valortarjeta = document.getElementById('ntarjeta').value;
    
    // llamar funcion validartarjeta
    let esvalida = validartarjeta(valortarjeta);

    if (esvalida) {
        alert('Tarjeta de Credito Valida, '+nusuario+' su reserva se ha realizado exitosamente.');
    } else {
        alert('Tarjeta de Credito Invalida, '+nusuario+' intente nuevamente.')
    }
}


function validartarjeta(numerotarjeta) {
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


    }
}


