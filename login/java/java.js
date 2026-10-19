const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const botaoEntrar = document.getElementById("botaoEntrar");

botaoEntrar.addEventListener("click", function () {
    const nomeUsuario = usuario.value;
    const senhaDigitada = senha.value;

    if (nomeUsuario === "" || senhaDigitada === "") {
        alert("Preencha todos os campos!");
    } else if (nomeUsuario === "zael" && senhaDigitada === "Minions2021") {
        alert("login realizado com sucesso!");
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
