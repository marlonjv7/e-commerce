function mostrarDetalle(contenedor, array) {

    const { id, nombre, img, precio, cantidad, descripcion, filter } = array;
    contenedor.innerHTML += `
    <section class="detalleShoe">
        <div class="detalle">
            <img id="${id}" class="eliminar" src="${img}" alt="">
                <div class="description">
                     <h3>${nombre}</h3>
                     <p>$${precio}</p>
                     <p>${descripcion}</p>
                     <p>Cant. ${cantidad}</p>
                </div>
        </div>
</section>
`
}

export default mostrarDetalle;