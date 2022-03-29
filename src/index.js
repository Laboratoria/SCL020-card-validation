import validator from './validator.js';
document.getElementById("screen2").style.display = "none";


const getIn = document.getElementById("getIn");
getIn.addEventListener("click" , ()=> {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
});
    
const getOut = document.getElementById("getOut");
getOut.addEventListener("click" , ()=> window.location.assign("https://www.google.com"));




console.log(validator);
