function generateOrderNumber() {
    const orderNumber = Math.floor(Math.random() * 1000000);
    document.getElementById('orderNumber').textContent = orderNumber;

    const inputData = document.querySelector('#input_date');
    const inputHora = document.querySelector('#input_hours');

    let dataAtual = new Date();
    let ano = dataAtual.getFullYear();
    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    let dia = String(dataAtual.getDate()).padStart(2, '0');
    
    // Formate horas e minutos com dois dígitos
    let hora = String(dataAtual.getHours()).padStart(2, '0');
    let min = String(dataAtual.getMinutes()).padStart(2, '0');

    inputData.value = `${ano}-${mes}-${dia}`;
    inputHora.value = `${hora}:${min}`;
}


// Função para imprimir
function printPage() {
    window.print();
}

