export const metodoGetData = async (puertoEndPoint) => {
    const LINK = 'https://e-commerce-shoes.herokuapp.com'

    let respuesta = await fetch(`${LINK}/${puertoEndPoint}`);
    let data = await respuesta.json();

    return data;
}