// Aqui guardo cuantas letras ha visto el usuario
var letrasVistas = 0;

// Esta funcion se llama cuando se hace clic en una card
function voltear(card) {

  // Si ya esta volteada se la quito, si no se la pongo
  if (card.classList.contains("volteada")) {
    card.classList.remove("volteada");
  } else {
    card.classList.add("volteada");
  }


  if (card.getAttribute("data-visto") != "si") {
    card.setAttribute("data-visto", "si");
    letrasVistas = letrasVistas + 1;
    document.getElementById("contador").textContent = letrasVistas;
  }
}

// Esta funcion muestra solo las vocales o todas las letras
function filtrar(tipo) {
  var cards = document.querySelectorAll(".card");

  for (var i = 0; i < cards.length; i++) {
    if (tipo == "todas") {
      cards[i].style.display = "block";
    } else {
      // tipo es "vocales"
      if (cards[i].getAttribute("data-tipo") == "vocal") {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    }
  }git
}
