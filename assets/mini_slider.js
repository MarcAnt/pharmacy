
document.addEventListener('DOMContentLoaded', ()=> {

const content = document.getElementById('content-slider'); 
let elements = null; 
let counter = 0; 



for(let i = 1; i  <= 4; i++) {

    elements = document.createElement('div')
    elements.classList.add('elements')

    imgs = document.createElement('img')
    titulo = document.createElement('h1')
    comentario = document.createElement('p')
    
    content.insertAdjacentElement('afterbegin', elements)

    elements.insertAdjacentElement('afterbegin', titulo)
    elements.insertAdjacentElement('beforeend', imgs)
    elements.insertAdjacentElement('beforeend', comentario)
    

    content.firstChild.style.backgroundColor = '#ffd039'

    if( i === 4) {
        //titulo.textContent = 'Distancia'
        comentario.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi incidunt saepe, soluta possimus sit enim consectetur repellendus voluptate eveniet aliquam suscipit sed! Maxime magni quasi perferendis. Alias, dolores perferendis?'
        imgs.src = 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
    
    }else if(i === 3) {

        comentario.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi incidunt saepe, soluta possimus sit enim consectetur repellendus voluptate eveniet aliquam suscipit sed!'
        imgs.src = 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

    }else if(i === 2) {
      
        comentario.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        imgs.src = 'https://images.unsplash.com/photo-1514416205405-075ab2f15964?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

    }else {
        
        comentario.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi incidunt saepe, soluta possimus sit enim consectetur repellendus voluptate eveniet aliquam suscipit sed!'
        imgs.src = 'https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'

    }
}

    let slides = e => {

        counter++
        setTimeout(() => {
                
            element =  content.removeChild(content.firstChild)
            content.appendChild(element)
            
            content.lastElementChild.classList.remove('ocultar')
        }, 2000);
            
        for(let c = 1; c <= 4; c++) {
            content.firstChild.classList.add('ocultar')
        }
        
    }
 
    setInterval(()=> {
        slides()
    }, 5500)
        
}) 
    
