const cepInput = document.querySelector("[name='cep']");
const endereco = document.querySelector("[name='endereco']");
const bairro = document.querySelector("[name='bairro']");
const cidade = document.querySelector("[name='cidade']");
const estado = document.querySelector("[name='estado']");

cepInput.addEventListener("blur", function () {

let cep = cepInput.value.replace(/\D/g, "");

if (cep.length !== 8) return;

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(res => res.json())
.then(data => {

    if (data.erro) {
        cepInput.classList.add("is-invalid");
        return;
    }

    cepInput.classList.remove("is-invalid");

    endereco.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;

});

});



const saveButton = document.querySelector("#salvar");
saveButton.addEventListener("click", function () {
    alert("Formulário enviado com sucesso!");
});