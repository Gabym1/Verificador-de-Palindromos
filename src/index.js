import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.getElementById("btn_verificar").addEventListener("click", function() {
  let letras = document.getElementById("letras").value;
  let palabra = "";
  for (let i = 0; i < letras.length; i++) {
    let letra = letras[i].toLowerCase();
    if ((letra >= 'a' && letra <= 'z') || (letra >= '0' && letra <= '9')) {
      palabra += letra;
    }
  }
  let palindromo = true;
  for (let i = 0; i < palabra.length / 2; i++) {
    if (palabra[i] !== palabra[palabra.length - 1 - i]) {
      palindromo = false;
      break;
    }
  }
  if (palindromo) {
    alert("¡Es un palíndromo!");
  } else {
    alert("No es un palíndromo, ingrese, inte