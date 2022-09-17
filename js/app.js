// codigo de la actividad 2
// const myDom=document;
// console.log(myDom)


const myBtn=document.getElementById('boton');
const btnBorrar=document.getElementById('borrar')
myBtn.addEventListener('click', obtenerCant);
btnBorrar.addEventListener('click', borrar);


function obtenerCant(){
    const cant=parseInt(document.getElementById('texto').value);
    if(cant>0){
        mySction=document.getElementById('sector');
        const myVideo='<ul class="list-group"><li class="list-group-item list-group-item-warning d-flex justify-content-between align-items-start"><iframe width="560" height="315" src="https://www.youtube.com/embed/0ZrT9VESaGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <span class="badge bg-primary rounded-pill">Dragon Ball Z Chala Head Chala</span>  </li></ul>' 
        mySction.innerText='';
        for(let i=0; i<cant; i++){
            mySction.innerHTML+=myVideo;
        }
    }    
}

function borrar(){
    document.getElementById('sector').innerText='Section';
    document.getElementById('sector').style.backgroundColor='lightgray';
    document.getElementById('texto').value='';
    
}





