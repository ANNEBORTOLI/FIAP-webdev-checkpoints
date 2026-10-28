function calcular() {
  let preco = Number(document.getElementById("preco").value);
  let qtd = Number(document.getElementById("qtd").value);

  let resultado = preco * qtd;
  document.getElementById("resultado").innerText = "R$ " + resultado;
}

function limpar() {
  document.getElementById("preco").value = "";
  document.getElementById("qtd").value = "";
  document.getElementById("resultado").innerText = "Resultado: ";
  document.getElementById("preco").focus();
}
