document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const campoA = parseFloat(document.getElementById('campoA').value);
        const campoB = parseFloat(document.getElementById('campoB').value);

        if (campoB > campoA) {
            messageDiv.textContent = "Formulário válido! O número B é maior que o número A.";
            messageDiv.className = "message success";
        } else {
            messageDiv.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
            messageDiv.className = "message error";
        }
    });
});
