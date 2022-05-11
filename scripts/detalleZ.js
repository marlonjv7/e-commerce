import Agg from "../modules/agregarContenedor.js";
import eliminar from "../modules/delete.js";
import mostrarDetalle from "../modules/mostrarDetail.js";

let mostrarDeta = document.getElementById('mostrarD');
let shoeSele = JSON.parse(localStorage.getItem('shoe'));
let borrar = document.getElementById('delete');
let comprar = document.getElementById('buy');
let footer = document.getElementById('AggClase');




mostrarDetalle(mostrarDeta, shoeSele)

borrar.addEventListener('click', ({ target }) => {
    if (target.id) {
        console.log('todo salio bien')
        eliminar(shoeSele);
        window.location.href = '../pages/productos.html'
    } else {
        console.log('hay un error')
    }
});

comprar.addEventListener('click', ()=>{
    alert('Felicidades su compra a sido realizada con exicto!!')
    window.location.href = '../pages/productos.html'
});

Agg(footer);