function checkAnswers() {
    var answers = {
      q1: document.querySelector('input[name="q1"]:checked').value,
      q2: document.querySelector('input[name="q2"]:checked').value,
      q3: document.querySelector('input[name="q3"]:checked').value,
      q4: document.querySelector('input[name="q4"]:checked').value,
      q5: document.querySelector('input[name="q5"]:checked').value
    };
    
    var correctAnswers = {
      q1: "a",
      q2: "b",
      q3: "b",
      q4: "b",
      q5: "c"
    };
    
    var score = 0;
    for (var key in answers) {
      if (answers[key] === correctAnswers[key]) {
        score++;
      }
    }
    
    var resultText = "Obtuviste " + score + " de 5 preguntas correctas.";
    document.getElementById("result").textContent = resultText;
  }
  function enviar(){
	  let puntuacion = document.getElementById('puntuacion').value;
    /* document.getElementById('nombre1').innerHTML = nombre;
    document.getElementById('nombre1').style.color = "wite"
    document.getElementById('opinion2').innerHTML = opinion;
    document.getElementById('opinion2').style.color = "wite"
    document.getElementById('puntuacion3').innerHTML = puntuacion;
    document.getElementById('puntuacion3').style.color = "wite"
    document.getElementById('puntuacion3').style.border = "20px" */  
    let nodo = document.createElement("div")
    nodo.innerHTML = `<p>puntuacion: ${puntuacion}</p>`

    let padre = document.getElementById ("boxdato")
    padre.appendChild(nodo)
}
/* alert ("mira wachin aca tu mama no te va a pegar si t queres burlar de alguien con down, nosotros te defendemos y nos burlamos de los downs juntos") */
  