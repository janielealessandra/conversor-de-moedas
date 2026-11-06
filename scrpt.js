const campoValor = document.getElementById("valor");
const selectOrigem = document.getElementById("moedaOrigem");
const selectDestino = document.getElementById("moedaDestino");
const botao = document.getElementById("btnConverter");
const resultado = document.getElementById("resultado");

const taxas = {
  BRL: { USD: 0.18, EUR: 0.17, BRL: 1 },
  USD: { BRL: 5.50, EUR: 0.92, USD: 1 },
  EUR: { BRL: 6.00, USD: 1.09, EUR: 1 }
};

function converter() {
  const valor = parseFloat(campoValor.value);
  const origem = selectOrigem.value;
  const destino = selectDestino.value;

  if (isNaN(valor) || valor <= 0) {
    resultado.textContent = "Digite um valor válido.";
    resultado.style.color = "#dc2626";
    return;
  }

  const valorFinal = valor * taxas[origem][destino];

  resultado.style.color = "#059669";
  resultado.textContent =
    valor.toFixed(2) + " " + origem + " = " + valorFinal.toFixed(2) + " " + destino;
}

botao.addEventListener("click", converter);

campoValor.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    converter();
  }
});