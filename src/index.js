import validator from './validator.js';

document.getElementById("screen2").style.display = "none";
document.getElementById("screen3").style.display = "none";
//document.getElementById("screen4").style.display = "none";//


//screen1//
const getIn = document.getElementById("getIn");
getIn.addEventListener("click" , ()=> {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
});    
const getOut = document.getElementById("getOut");
getOut.addEventListener("click" , ()=> {
alert("Serás redireccionado a Google");
window.location.assign("https://www.google.com");
});


//screen2 Hides everything but selected item//
const divPet = document.getElementById("divPet");
divPet.addEventListener("click" , ()=> {
    document.getElementById("divRoma").style.display = "none";
    document.getElementById("divVege").style.display = "none";
    document.getElementById("divGolo").style.display = "none";
    document.getElementById("divFit").style.display = "none";
    document.getElementById("divCerve").style.display = "none";
});

const divRoma = document.getElementById("divRoma");
divRoma.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display = "none";
    document.getElementById("divVege").style.display = "none";
    document.getElementById("divGolo").style.display = "none";
    document.getElementById("divFit").style.display = "none";
    document.getElementById("divCerve").style.display = "none";
});

const divVege = document.getElementById("divVege");
divVege.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display = "none";
    document.getElementById("divRoma").style.display = "none";
    document.getElementById("divGolo").style.display = "none";
    document.getElementById("divFit").style.display = "none";
    document.getElementById("divCerve").style.display = "none";
});

const divGolo = document.getElementById("divGolo");
divGolo.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display = "none";
    document.getElementById("divRoma").style.display = "none";
    document.getElementById("divVege").style.display = "none";
    document.getElementById("divFit").style.display = "none";
    document.getElementById("divCerve").style.display = "none";
})

const divFit = document.getElementById("divFit");
divFit.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display = "none";
    document.getElementById("divRoma").style.display = "none";
    document.getElementById("divVege").style.display = "none";
    document.getElementById("divGolo").style.display = "none";
    document.getElementById("divCerve").style.display = "none";
});

const divCerve = document.getElementById("divCerve");
divCerve.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display = "none";
    document.getElementById("divRoma").style.display = "none";
    document.getElementById("divVege").style.display = "none";
    document.getElementById("divGolo").style.display = "none";
    document.getElementById("divFit").style.display = "none";
});

//Hiding Ul tag (class="cardDescription") and strong tag//
document.getElementByClassName("cardDescription").style.display = "none";




//screen3//
const btnValidar = document.getElementById("validar");
btnValidar.addEventListener("click", (event)=> {
    validator('este es la funcion validar de mi validator')
    event.preventDefault();
    const number = document.getElementById("number").value;
   if (number.length < 16){
       alert("Debes ingresar correctamente el número de tu tarjeta, si la cantidad de números es menor a 16, antepone la cantidad de 0 que necesites")
   }else if(number.length > 16){
       alert("¡¡Te pasaste!! El máximo de números a ingresar por tarjeta es de 16")
   } else{
   console.log(number)}
});






