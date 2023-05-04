let boton = document.getElementById("boton");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    const data = {
        email: email.value,
        password: password.value,
        nombre: nombre.value,
    };

    if (!elMailEsValido(data.email)) {
        mostrarError("Por favor ingresa un email válido.");
        return;
    }

    if (!laPasswordEsValida(data.password)) {
        mostrarError("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    fetch("usuarios.json")
        .then((response) => response.json())
        .then((usuarios) => {
            const esValidoElUsuario = usuarios.some(
                (usuario) =>
                    usuario.email === data.email &&
                    usuario.password === data.password
            );
            if (esValidoElUsuario) {
                const nombreUsuario = localStorage.getItem("nombre");
                alert(`Hola ${nombreUsuario}!`);
                window.location.href = "index.html";
            } else {
                const nuevoUsuario = {
                    email: data.email,
                    password: data.password,
                    nombre: data.nombre,
                };
                usuarios.push(nuevoUsuario);
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                localStorage.setItem("nombre", data.nombre);
                alert(`Bienvenido, ${data.nombre}!`);
                window.location.href = "index.html";
            }
        })
        .catch((error) => {
            console.error(
                "Error al cargar el archivo usuarios.json:",
                error
            );
        });
});

function elMailEsValido(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function laPasswordEsValida(password) {
    return password.length >= 6;
}

function mostrarError(message) {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}
