// Função para gerar número aleatório
function generateOrderNumber() {
    const orderNumber = Math.floor(Math.random() * 1000000);
    document.getElementById('orderNumber').textContent = orderNumber;
}

// Função para imprimir
function printPage() {
    window.print();
}

// Gera o número assim que a página carrega
window.onload = generateOrderNumber;