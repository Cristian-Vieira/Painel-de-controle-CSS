const applyChangesBtn = document.getElementById('applyChanges');
const controlPanelForm = document.getElementById('controlPanel');
const bgColorInput = document.getElementById('bgColor');
const textColorInput = document.getElementById('textColor');
const fontSizeInput = document.getElementById('fontSize');
const fontFamilyInput = document.getElementById('fontFamily');

// div de prévia
const previewDiv = document.getElementById("preview");

// Define a função que será executada ao clicar no botão "Aplicar"
function applyChanges() {
    document.body.style.backgroundColor = bgColorInput.value;
    document.body.style.color = textColorInput.value;
    document.body.style.fontSize = `${fontSizeInput.value}px`;
    document.body.style.fontFamily = fontFamilyInput.value;
    closeModal();
}

// Adiciona os event listeners
applyChangesBtn.addEventListener('click', applyChanges);
controlPanelForm.addEventListener('submit', event => event.preventDefault());


previewDiv.style.backgroundColor = bgColorInput.value;
previewDiv.style.color = textColorInput.value;
// selecione os elementos do painel de controle
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

