const url = "https://capslk.com.br/"
const botao = document.getElementById("shareButton");

function clipboardCopy() {
  navigator.clipboard.writeText(url);
}

botao.addEventListener('click', clipboardCopy);
