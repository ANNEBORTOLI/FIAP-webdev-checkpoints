function trocarImagem() {
  const img = document.getElementById("minhaImg");
  const srcAtual = img.getAttribute("src");

  if (srcAtual === "./assets/01-avatar.png") {
    img.setAttribute("src", "./assets/02-avatar.png");
    img.setAttribute("alt", "Avatar 02");
  } else {
    img.setAttribute("src", "./assets/01-avatar.png");
    img.setAttribute("alt", "Avatar 01");
  }
}
