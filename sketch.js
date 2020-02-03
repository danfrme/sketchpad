// defino variables
let container = document.querySelector('.container');

let btn = document.querySelector('button');
let grid;
let i=1;

//ciclo que crea el grid
function crear(j){
    // location.reload();
    
    
    while (i <= j){
        
        let div = document.createElement('div');
        
        div.classList.add('grid-item');
        div.innerHTML=i;
        container.appendChild(div);
        
        i++;
    }
}

function hola(){
    a=prompt('num of squares');  
    crear(a);
}

btn = addEventListener('click' , hola);
