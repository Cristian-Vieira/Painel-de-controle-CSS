// Get elementos do DOM
const APLICAR_BTN = document.getElementById('applyChanges');
const CONTROLPAINEL_FORM = document.getElementById('controlPanel');
const BGCOLOR_INPUT = document.getElementById('bgColor');
const TEXTCOLOR_INPUT = document.getElementById('textColor');
const FONTSIZE_INPUT = document.getElementById('fontSize');
const FONTFAMILY_INPUT = document.getElementById('fontFamily');
const PREVIEW_DIV = document.getElementById("preview");

 // Padrizando Style dos elemetos de preview das alterações 
PREVIEW_DIV.style.backgroundColor = BGCOLOR_INPUT.value;
PREVIEW_DIV.style.color = TEXTCOLOR_INPUT.value;

 // Função do botão "Aplicar"
function applyChanges() {
    document.body.style.backgroundColor = BGCOLOR_INPUT.value;
    document.body.style.color = TEXTCOLOR_INPUT.value;
    document.body.style.fontSize = `${FONTSIZE_INPUT.value}px`;
    document.body.style.fontFamily = FONTFAMILY_INPUT.value;
    closeModal();
}

 // Event listeners para aplicar alterações 
APLICAR_BTN.addEventListener('click', applyChanges);
CONTROLPAINEL_FORM.addEventListener('submit', event => event.preventDefault());


 // Trocar style da div de preview ao alterar os valores dos inputs
BGCOLOR_INPUT.addEventListener("change", () => {
    PREVIEW_DIV.style.backgroundColor = BGCOLOR_INPUT.value;
});

TEXTCOLOR_INPUT.addEventListener("change", () => {
    PREVIEW_DIV.style.color = TEXTCOLOR_INPUT.value;
});

FONTSIZE_INPUT.addEventListener("change", () => {
    PREVIEW_DIV.style.fontSize = FONTSIZE_INPUT.value + "px";
});

FONTFAMILY_INPUT.addEventListener("change", () => {
    PREVIEW_DIV.style.fontFamily = FONTFAMILY_INPUT.value;
});

