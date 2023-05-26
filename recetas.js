let recetas = [];

const storedRecetas = localStorage.getItem("recetas");
if (storedRecetas) {
  recetas = JSON.parse(storedRecetas);
}

const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
// const imagen = document.getElementById("imagen");
const addItem = document.querySelector(".addItem");
const recetasContainer = document.getElementById("recetasContainer");

addItem.addEventListener("click", (e) => {
  e.preventDefault();

  const textTitulo = titulo.value;
  const textDescripcion = descripcion.value;
  // const fileImagen = imagen.file[0];

  const newItem = {
    titulo: textTitulo,
    descripcion: textDescripcion,
    // imagen: fileImagen.name,
  };

  recetas.push(newItem);
  localStorage.setItem("recetas", JSON.stringify(recetas));

  console.log(recetas);

  titulo.value = "";
  descripcion.value = "";
  // imagen.value = null;

  renderRecetas();
});

function renderRecetas() {
  recetasContainer.innerHTML = "";

  recetas.forEach((receta) => {
    const recetaElement = document.createElement("div");
    recetaElement.innerHTML = `
    <div class="blog-box">

    <div class="blog-text">
    <h3 class="blog-title">${receta.titulo}</h3>
    <p>${receta.descripcion}</p>
    </div>
    </div>
    `;
    recetasContainer.appendChild(recetaElement);
  });
}

renderRecetas();
