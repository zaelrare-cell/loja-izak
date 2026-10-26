const nome = document.getElementById("nome");
const editarBotao = document.getElementById("editar");
const sairBotao = document.getElementById("sair");

editarBotao.addEventListener("click", function() {
const novoNome = prompt("Digite seu nome:");

if (novoNome !== null && novoNome.trim() !== "") {
    nome.textContent = novoNome.trim();
}

const novaCidade = prompt("Digite sua cidade:");

if (novaCidade !== null && novaCidade.trim() !== "") {
    document.querySelector(".curriculo p:nth-of-type(3)").textContent = "Cidade: " + novaCidade.trim();
}



});

sairBotao.addEventListener("click", function() {
const resposta = confirm("Deseja sair do perfil?");

if (resposta) {
    alert("Você saiu do perfil!");
    window.location.href = "about:blank";
}

});
