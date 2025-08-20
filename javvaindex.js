function enviar(){
    let nombre = document.getElementById('nombre').value;
	  let opinion = document.getElementById('opinion').value;
	  let puntuacion = document.getElementById('puntuacion').value;
    let nodo = document.createElement("div")
    nodo.innerHTML = `<p>Nombre: ${nombre}</p>
                    <p>Opinion: ${opinion}</p>
                    <p>Puntuacion: ${puntuacion}</p>`

    let padre = document.getElementById ("boxdato")
    padre.appendChild(nodo)
}
