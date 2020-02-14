function show(id, button){
    
    let element = document.querySelector(id)
    
    if (element.style.display == 'none'){
        button.innerHTML = 'ocultar respostas'
        element.style.display = 'block'
    }
    else {
        button.innerHTML = 'mostrar respostas'
        element.style.display = 'none'
    }
}
