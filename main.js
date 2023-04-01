/*let correo = prompt("Ingresa tu correo electrónico:");

while (!correo.includes("@") || !correo.includes(".")) {
  alert("Mail inválido, por favor inténtalo de nuevo.");
  correo = prompt("Ingresa tu correo electrónico:");
}

alert("¡Bienvenido a Berrylicious!"); */



let validarCorreo = () => {
    let correo = prompt("Ingresa tu correo electrónico:");
  
    let tieneArroba = false;
    let tienePunto = false;
  
    for (let i = 0; i < correo.length; i++) {
      if (correo[i] === "@") {
        tieneArroba = true;
      }
      if (correo[i] === "." && tieneArroba) {
        tienePunto = true;
        break;
      }
    }
  
    while (!tieneArroba || !tienePunto) {
      alert("Mail inválido, por favor inténtalo de nuevo.");
      correo = prompt("Ingresa tu correo electrónico:");
  
      tieneArroba = false;
      tienePunto = false;
  
      for (let i = 0; i < correo.length; i++) {
        if (correo[i] === "@") {
          tieneArroba = true;
        }
        if (correo[i] === "." && tieneArroba) {
          tienePunto = true;
          break;
        }
      }
    }
  
    alert("¡Bienvenido a Berrylicious!");
  };
  
  validarCorreo();