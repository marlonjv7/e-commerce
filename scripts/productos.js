import { metodoGetData } from "../helpers/dataJSON.js";
import Agg from "../modules/agregarContenedor.js";
import { mostrarShoes } from "../modules/mostrarShoes.js";

let productos = document.querySelector('.mostrarP');
let shoeSeleccionado = document.querySelector('.seleccionado');
let btnHombres = document.getElementById('hombres');
let btnMujeres = document.getElementById('mujeres');
let boton = document.querySelector('.conteF');
let footer = document.getElementById('AggClase');


document.addEventListener('DOMContentLoaded', async () => {
    let arraydata = await metodoGetData('dataShoes');

    let shoeHoM = JSON.parse(localStorage.getItem('filtro'));
    mostrarShoes(productos, shoeHoM);

    btnHombres.addEventListener('click', () => {
        const filtro = arraydata.filter((tipo) => tipo.filter === "hombre");
        localStorage.setItem('filtro', JSON.stringify(filtro));
        mostrarShoes(productos, filtro);
    });

    btnMujeres.addEventListener('click', () => {
        const filtro = arraydata.filter((tipo) => tipo.filter === "mujer");
        localStorage.setItem('filtro', JSON.stringify(filtro));
        mostrarShoes(productos, filtro);
    });

    shoeSeleccionado = document.addEventListener('click', ({ target }) => {
        if (target.classList.contains('seleccionado')) {
            let id = target.id;
            let capShoe = arraydata.find((item) => item.id == id);
            localStorage.setItem('shoe', JSON.stringify(capShoe));
            window.location.href = '../pages/detalleZ.html'
        };
    });

    

    boton.addEventListener("submit", async (e)=> {
        e.preventDefault()

        let nombreP = document.getElementById('nombre').value;
        let imgP = document.getElementById('imagen').value;
        let precioP = document.getElementById('valor').value;
        let cantidadP = document.getElementById('cantidadP').value;
        let descripcionP = document.getElementById('detalle').value;
        let filterP = document.getElementById('categoria').value;

        let nuevoProducto = {
            nombre: nombreP,
            img: imgP,
            precio: precioP,
            cantidad: cantidadP,
            descripcion: descripcionP,
            filter: filterP
        }

        await fetch('http://localhost:4000/dataShoes', {
            method: 'POST',
            body: JSON.stringify(nuevoProducto),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(() => {
            alert("se guardo correctamente")
        })
            .catch(() => {
                alert("Hubo un error")
            })
        window.location.href = '../pages/productos.html'

    });
});

Agg(footer);