import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cartas = [];

const iconos = ['♦', '♠', '♥', '♣'];
const numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const valores = {"A": 1, "2": 2, "3": 3, "4": 4, "5": 5,"6": 6, "7": 7, "8": 8, "9": 9, "10": 10,"J": 11, "Q": 12, "K": 13};

window.onload = function () {
  document.getElementById("draw").addEventListener("click", generarCartas);
  document.getElementById("sort").addEventListener("click", ordenarCartas);
};

function generarCartas() {
  const cantidad = parseInt(document.getElementById("opcionusuario").value);
  const container = document.querySelector(".cartascontainer");
  const plantilla = document.querySelector(".cartaplantilla");
  container.innerHTML = "";
  cartas = [];

  for (let i = 0; i < cantidad; i++) {
    const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
    const iconoAleatorio = iconos[Math.floor(Math.random() * iconos.length)];

    cartas.push({
      numero: numeroAleatorio,
      icono: iconoAleatorio,
      valor: valores[numeroAleatorio]
    });
  }

  mostrarCartas(cartas);
}

function mostrarCartas(muestraCarta) {
  const container = document.querySelector(".cartascontainer");
  const plantilla = document.querySelector(".cartaplantilla");
  container.innerHTML = "";

  for (let carta of muestraCarta) {
    const nuevaCarta = plantilla.cloneNode(true);
    nuevaCarta.style.display = "flex";
    nuevaCarta.classList.remove("plantilla");

    nuevaCarta.querySelector(".icono-arriba").innerHTML = carta.icono;
    nuevaCarta.querySelector(".icono-abajo").innerHTML = carta.icono;
    nuevaCarta.querySelector(".numero").innerHTML = carta.numero;

    if (carta.icono === '♦' || carta.icono === '♥') {
      nuevaCarta.style.color = "red";
    } else {
      nuevaCarta.style.color = "black";
    }

    nuevaCarta.addEventListener("click", function () {
      nuevaCarta.style.color = "red";
    });

    nuevaCarta.addEventListener("mouseover", function () {
      nuevaCarta.style.color = "blueviolet";
    });

    nuevaCarta.addEventListener("mouseout", function () {
      nuevaCarta.style.color = ""; 
      
    });


    container.appendChild(nuevaCarta);
  }
}
 function ordenarCartas () {
    for ( let i = 0; i < cartas.length -1; i++){
        for ( let j = 0; j < cartas.length -1; j++) {
                if (cartas[j].valor > cartas[j+1].valor) {
                    let aux = cartas[j]
                    cartas[j] = cartas[j+1]
                    cartas[j+1] = aux

                };

    
            };
    
        };

    mostrarCartas(cartas);

 }

 