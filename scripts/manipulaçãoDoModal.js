const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

// Define a função que será executada ao clicar no botão "Abrir Painel de Controle"
function openModal() {
    modal.style.display = 'block';
}

// Define a função que será executada ao clicar no botão "Fechar"
function closeModal() {
    modal.style.display = 'none';
}

// Adiciona os event listeners
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
