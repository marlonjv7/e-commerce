function Agg(contendor) {
    let div = document.createElement('div');
    div.setAttribute('class', 'footerConte');
    contendor.appendChild(div);
    let parrafo = document.querySelector('.footerConte');
    parrafo.innerHTML += `
        <p>Geek &copy;-MJ7 2022 <a class="link"
            href="https://www.facebook.com/marlonjoel.vivasgelviz/">Contacto</a></p>
    `
};

export default Agg;
