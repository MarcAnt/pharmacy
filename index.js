/* Efectos */

const header = document.querySelector('header'); 
const ul = document.querySelector('ul'); 
const menuUl = document.getElementById('menu')
const lineBar = document.querySelector('.active-bar')
const btnUp = document.createElement('div')
const contactanosSection = document.getElementById('contactanos')
const recipe = document.getElementById('recipe')
const menuBtn = document.querySelector('#menu-btn')
btnUp.setAttribute('class', 'btn-up');
btnUp.id = 'btn-up'
document.body.appendChild(btnUp)
let posicionScroll = 0


 //Control de botón up
 let controlBtnUp = () => {

    intervalo = setInterval(function() {

        posicionScroll -= 50; 

        if(posicionScroll === header.offsetTop || posicionScroll < 0) {
            posicionScroll = 0; 
            clearInterval(intervalo)
        }
        window.scrollTo(0, posicionScroll);

    }, 20)
}


window.addEventListener('scroll', (e) => {
    //Control de botón up
    posicionScroll = window.pageYOffset;
    
    //Control del header
    if(scrollY > 150) {
        header.style.backgroundColor = 'rgba(255, 255, 255, .5)'
        
        btnUp.style.cursor = 'pointer'
        btnUp.style.opacity = '1'
        btnUp.addEventListener('click', controlBtnUp)
    }else { 
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        
        
        btnUp.style.opacity = '0'
        btnUp.style.cursor = 'default'
        btnUp.removeEventListener('click', controlBtnUp)
    }
  
 
    if( scrollY >= (contactanosSection.offsetTop - 600) ) {
        
       recipe.classList.add('fadein')
    }

})

//Crear la barra de menú 

for(let j = 2; j <= 4; j++) {

    menuUl.children[j].childNodes[0].addEventListener('mouseover', () => {

        lineBar.style.width = `${menuUl.children[j].childNodes[0].offsetWidth}px`
        lineBar.style.left = `${menuUl.children[j].childNodes[0].offsetLeft}px` 
        lineBar.style.transform = 'translateY(-35px)'
        lineBar.style.opacity = '1'
    
    })
    
    menuUl.children[j].childNodes[0].addEventListener('mouseleave', () => {
        
        lineBar.style.transform = 'translateY(0)'
        lineBar.style.opacity = '0'
    
    })

    
}

//Control de animacion del header menu
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active'); 

    for(let k = 2; k <= 6; k++) {
        menuUl.children[k].classList.toggle('show')
    }
})



//Scroll sections
let enlace = null; 
let destinoEnlace = null; 
menuUl.addEventListener('click', e => {
    e.preventDefault(); 
    enlace = e.target.getAttribute('href'); 

    if(enlace) {
    
        destinoEnlace = document.querySelector(enlace).offsetTop; 

        intervalo = setInterval(() => {

            if(posicionScroll < destinoEnlace) {

                posicionScroll+= 50

                if(posicionScroll >= destinoEnlace) {
                    posicionScroll = destinoEnlace; 
                    clearInterval(intervalo); 
                }

            }else {
                posicionScroll-= 50

                if(posicionScroll <= destinoEnlace) {
                    posicionScroll = destinoEnlace; 
                    clearInterval(intervalo); 
                }
            }

            window.scrollTo(0, posicionScroll);
        }, 20);

    }
    
})


//control del modal 
const imgClick = [...document.querySelectorAll('.color')]
const btnCerrar = document.getElementById('cerrar')
const modal = document.getElementById('modal')
let modalImg = document.getElementById('modal-img')
let modalImgs = [...document.querySelectorAll('.productos .content-productos div img')]

let insertarImagen =  e => {

    //Mostrar el modal 
    modal.style.visibility = 'visible'
    //Insertar la imagen al modal 
    modalImg.src = e.target.parentNode.children[1].src

    document.body.style.overflowY = 'hidden'

    modal.classList.add('abrir-modal')
    modal.classList.remove('cerrar-modal')

}

let cerrarModal = e => {
    
    if(e.keyCode === 27) {
        modal.classList.add('cerrar-modal')
        modal.classList.remove('abrir-modal')
        modal.style.visibility = 'hidden'
        document.body.style.overflowY = ''
    }

    modal.classList.add('cerrar-modal')
    modal.classList.remove('abrir-modal')
    modal.style.visibility = 'hidden'
    document.body.style.overflowY = ''
}

for(let i = 0; i < imgClick.length; i++) {
    imgClick[i].addEventListener('click', insertarImagen)
}

document.addEventListener('keydown', cerrarModal)
btnCerrar.addEventListener('click', cerrarModal)