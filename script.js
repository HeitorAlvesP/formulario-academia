import { validarCPF } from './function.js';


document.getElementById("formCadastro").addEventListener("submit", function(event) {
    let cpf = document.getElementById("cpf").value;
    let cpfErro = document.getElementById("cpfErro");

    if (!validarCPF(cpf)) {
        event.preventDefault();  // Impede o envio do formulário
        cpfErro.style.display = "block";  // Exibe a mensagem de erro
    } else {
        cpfErro.style.display = "none";  // Oculta a mensagem de erro
    }
});