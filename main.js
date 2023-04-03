/* ------->Simulador de validación de mail<----------*/


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

validarCorreo();