 // Get elements of DOM
const MODAL = document.getElementById('modal');
const ABRIR_PAINEL_BTN = document.getElementById('openModal');
const FECHAR_PAINEL_BTN = document.getElementById('closeModal');

// Define a função que será executada ao clicar no botão "Abrir Painel de Controle"
function openModal() {
    MODAL.style.display = 'block';
}

// Define a função que será executada ao clicar no botão "Fechar"
function closeModal() {
    MODAL.style.display = 'none';
}

// Adiciona os event listeners
ABRIR_PAINEL_BTN.addEventListener('click', openModal);
FECHAR_PAINEL_BTN.addEventListener('click', closeModal);
