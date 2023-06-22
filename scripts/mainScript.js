// Seleciona os elementos do DOM que serão utilizados
const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const applyChangesBtn = document.getElementById('applyChanges');
const controlPanelForm = document.getElementById('controlPanel');
const bgColorInput = document.getElementById('bgColor');
const textColorInput = document.getElementById('textColor');
const fontSizeInput = document.getElementById('fontSize');
const fontFamilyInput = document.getElementById('fontFamily');

// Define a função que será executada ao clicar no botão "Abrir Painel de Controle"
function openModal() {
    modal.style.display = 'block';
}

// Define a função que será executada ao clicar no botão "Fechar"
function closeModal() {
    modal.style.display = 'none';
}

// Define a função que será executada ao clicar no botão "Aplicar"
function applyChanges() {
    document.body.style.backgroundColor = bgColorInput.value;
    document.body.style.color = textColorInput.value;
    document.body.style.fontSize = `${fontSizeInput.value}px`;
    document.body.style.fontFamily = fontFamilyInput.value;
    closeModal();
}

// Adiciona os event listeners
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
applyChangesBtn.addEventListener('click', applyChanges);
controlPanelForm.addEventListener('submit', event => event.preventDefault());


// selecione os elementos do painel de controle

// selecione a div de prévia
const previewDiv = document.getElementById("preview");

// adicione um evento "change" a cada elemento de entrada do painel de controle
bgColorInput.addEventListener("change", () => {
    previewDiv.style.backgroundColor = bgColorInput.value;
});

textColorInput.addEventListener("change", () => {
    previewDiv.style.color = textColorInput.value;
});

fontSizeInput.addEventListener("change", () => {
    previewDiv.style.fontSize = fontSizeInput.value + "px";
});

fontFamilyInput.addEventListener("change", () => {
    previewDiv.style.fontFamily = fontFamilyInput.value;
});
