/* ------->Simulador de validación de mail<----------


let validarCorreo = () => {
  let correo = prompt("Por favor ingresa tu correo electrónico:");

  let tieneArroba = false;
  let tienePunto = false;
  let tieneLetras = false;
  let letrasPermitidas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < correo.length; i++) {
    if (correo[i] === "@") {
      tieneArroba = true;
    }
    if (i >= 4 && letrasPermitidas.indexOf(correo[i]) !== -1) {
      tieneLetras = true;
    }
    if (correo[i] === "." && tieneArroba && tieneLetras) {
      tienePunto = true;
      break;
    }
  }

  while (!tieneArroba || !tienePunto || !tieneLetras) {
    alert("Mail inválido, por favor inténtalo de nuevo.");
    correo = prompt("Ingresa tu correo electrónico:");

    tieneArroba = false;
    tienePunto = false;
    tieneLetras = false;

    for (let i = 0; i < correo.length; i++) {
      if (correo[i] === "@") {
        tieneArroba = true;
      }
      if (i >= 4 && letrasPermitidas.indexOf(correo[i]) !== -1) {
        tieneLetras = true;
      }
      if (correo[i] === "." && tieneArroba && tieneLetras) {
        tienePunto = true;
        break;
      }
    }
  }

  alert("¡Bienvenido a Berrylicious!");
};

validarCorreo(); */

/*----------SEGUNDA PRE-ENTREGA--------*/


let letrasPermitidas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let correoValido = false;
let usuariosRegistrados = [
  { correo: "jose@gmail.com", nombre: "Jose" },
  { correo: "ana@hotmail.com", nombre: "Ana" },
  { correo: "juan@yahoo.com", nombre: "Juanjo" }
];

let validarCorreo = () => {
  let correo = prompt("Por favor ingresa tu correo electrónico:");

  let tieneArroba = false;
  let tienePunto = false;
  let tieneLetras = false;

  for (let i = 0; i < correo.length; i++) {
    if (correo[i] === "@") {
      tieneArroba = true;
    }
    if (i >= 4 && letrasPermitidas.indexOf(correo[i]) !== -1) {
      tieneLetras = true;
    }
    if (correo[i] === "." && tieneArroba && tieneLetras) {
      tienePunto = true;
      break;
    }
  }

  correoValido = tieneArroba && tienePunto && tieneLetras;

  if (correoValido) {
    let usuarioRegistrado = usuariosRegistrados.find(usuario => usuario.correo === correo);
    if (usuarioRegistrado) {
      let nombre = prompt("Por favor ingresa tu nombre:");
      usuarioRegistrado.nombre = nombre;
      alert("Bienvenido de nuevo, " + usuarioRegistrado.nombre + "!");

    } else {
      let nombre = prompt("Por favor ingresa tu nombre:");
      usuariosRegistrados.push({ correo: correo, nombre: nombre });
      alert("¡Bienvenido a Berrylicious " + nombre + "!");
    }
  } else {
    alert("Correo inválido, por favor inténtalo de nuevo.");
  }
};

validarCorreo();