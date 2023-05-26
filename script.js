let recetas = document.getElementById("recetas");

let generarRecetas = () => {
  return (recetas.innerHTML = recetasData
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
    .map((x) => {
      let { id, titulo, descripcion, imagen, fecha } = x;
      return `
    <div class="blog-container">
        <div id=receta-id-${id} class="blog-box">
            <div class="blog-img">
                <img width="220" src=${imagen} alt="imagen-receta">
            </div>
            <div class="blog-text">
            <span>${fecha}</span>
            <h3 class="blog-title">${titulo}</h3>
            <p>${descripcion}</p>
            </div>
        </div>
    </div>
    `;
    })
    .reverse()
    .join(""));
};

generarRecetas();