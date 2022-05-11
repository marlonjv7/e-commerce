export function mostrarShoes(contenedor, array) {
    contenedor.innerHTML = ""
    array.forEach((element) => {
        const { id, nombre, img, precio, cantidad, descripcion, filter } = element;
        contenedor.innerHTML += `
    <section>
        <a href="#"><img class="seleccionado" id="${id}" src="${img}" alt=""></a>
        <h3>${nombre}</h3>
            <p>Cant. ${cantidad}</p>
     </section>
    `
    });
}