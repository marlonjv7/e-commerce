import { metodoGetData } from "../helpers/dataJSON.js";
import Agg from "../modules/agregarContenedor.js";


let btnHombres = document.getElementById('hombres');
let btnMujeres = document.getElementById('mujeres');
let footer = document.getElementById('AggClase');

document.addEventListener('DOMContentLoaded', async () => {
    let arraydata = await metodoGetData('dataShoes');

    btnHombres.addEventListener('click', () => {
        const filtro = arraydata.filter((tipo) => tipo.filter === "hombre");
        localStorage.clear();
        localStorage.setItem('filtro', JSON.stringify(filtro));
        window.location.href = './pages/productos.html'
    });

    btnMujeres.addEventListener('click', () => {
        const filtro = arraydata.filter((tipo) => tipo.filter === "mujer");
        localStorage.clear();
        localStorage.setItem('filtro', JSON.stringify(filtro));
        window.location.href = './pages/productos.html'
    });
});

Agg(footer);