const editarBotao = document.getElementById("editar");
const sairBotao = document.getElementById("sair");
const areaFormulario = document.getElementById("areaFormulario");
const cancelarBotao = document.getElementById("cancelar");


editarBotao.addEventListener("click", function () {
    areaFormulario.hidden = !areaFormulario.hidden;
});


cancelarBotao.addEventListener("click", function () {
    areaFormulario.hidden = true;
});


sairBotao.addEventListener("click", function () {
    const resposta = confirm("Deseja sair do perfil?");

    if (resposta) {
        areaFormulario.hidden = true; 

        
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
    }

    const botaoEditar = document.querySelector ("#editar");
const botaoSair = document.querySelector ("#sair");
const botaoCancelar = document .querySelector ("#cancelar");

const areaFormulario = document.querySelector ("#abraFormulario");
const formulario = document.querySelector ("#formPerfil");

const campoNome = document.querySelector ("#nome");
const campoCurso = document.querySelector ("#curso");
const campoEmail = document.querySelector ("#email");
const campoCidade = document.querySelector ("#cidade");


const perfilNome = document.querySelector ("#perfilNome");
const perfilCurso = document.querySelector ("#perfilCurso");
const perfilEmail = document.querySelector("#perfilEmail");
const perfilCidade = document.querySelector ("#perfilCidade");

});


