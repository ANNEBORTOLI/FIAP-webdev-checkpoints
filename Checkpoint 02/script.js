let placar = 0;
let tagPlacar = document.getElementById("placar");

function adicionar() {
  placar++;
  atualizarPlacar();
}
function subtrair() {
  if (placar !== 0) {
    placar--;
    atualizarPlacar();
  }
}

function atualizarPlacar() {
  tagPlacar.innerText = placar;
}

function zerarPlacar() {
  placar = 0;
  atualizarPlacar();
}

atualizarPlacar();
