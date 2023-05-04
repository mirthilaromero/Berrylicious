let boton = document.getElementById("boton");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    const data = {
        email: email.value,
        password: password.value,
    };

    fetch("usuarios.json")
        .then((response) => response.json())
        .then((usuarios) => {
            const esValidoElUsuario = usuarios.some(
                (usuario) =>
                    usuario.email === data.email &&
                    usuario.password === data.password
            );
            if (esValidoElUsuario) {
                const usuarioValido = usuarios.find(
                    (usuario) => usuario.email === data.email
                );
                alert(`¡Hola ${usuarioValido.nombre}! te habíamos extrañado ;)`);
                window.location.href = "index.html";
            } else {
                const errorDiv = document.getElementById("error-message");
                errorDiv.innerHTML =
                    "Has ingresado un correo o password incorrecto.";
                errorDiv.style.display = "block";
            }
        })
        .catch((error) => {
            console.error(
                "Error al cargar el archivo usuarios.json:",
                error
            );
        });
});