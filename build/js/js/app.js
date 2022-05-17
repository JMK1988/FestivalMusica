document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    crearGaleria()
    navegacionFija()
}

function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){

        if( sobreFestival.getBoundingClientRect().top < 0 ){
            barra.classList.add('fijo')
            body.classList.add('body-scroll')
        }else{
            barra.classList.remove('fijo')
            body.classList.remove('body-scroll')
        }
    })

}


//crea la galeria en imagenes pequeñas
function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    //recorro el arreglo y voy cargando las imagenes
    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen_galeria">
        `;
        imagen.onclick = function(){
            mostrarImagen(i)
        }
        galeria.appendChild(imagen);
        

    };
}
//muestra la imagen en foto grande
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/grande/${id}.avif" type="image/avif">
            <source srcset="build/img/grande/${id}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen_galeria">
        `;
        //crea el modal de la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body')
    }

    //boton para cerrar el modal
    const cerrarModal = document.createElement('P')
    cerrarModal.textContent = 'X'
    cerrarModal.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body')
    }
    cerrarModal.classList.add('btn-cerrar')
    overlay.appendChild(cerrarModal)

    //añade el modal al html
    const body = document.querySelector('body');
    body.appendChild(overlay); 
    body.classList.add('fijar-body')
}