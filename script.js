// Função para gerar número aleatório
function generateOrderNumber() {
    const orderNumber = Math.floor(Math.random() * 1000000);
    document.getElementById('orderNumber').textContent = orderNumber;

    let resultado = document.querySelector("#res");

    let dataAtual = new Date();
    let dia = dataAtual.getDate().toString().padStart(2, '0'); // Adiciona zero à esquerda se necessário
    let mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); // Adiciona zero à esquerda se necessário
    let ano = dataAtual.getFullYear();

    resultado.innerHTML = `${dia}/${mes}/${ano}`

}

// Função para imprimir
function printPage() {
    window.print();
}

