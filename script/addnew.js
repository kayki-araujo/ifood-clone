const btnEmpresa = document.querySelector("#empresa");
const btnProduto = document.querySelector("#produto");
let mainScreen = document.querySelector(".main");
let empresaScreen = document.querySelector(".add_empresa");
let produtoScreen = document.querySelector(".add_produto");

let showEmpresa = function () {
    mainScreen.classList.add("hidden");
    empresaScreen.classList.remove("hidden");
};

let showProduto = function () {
    mainScreen.classList.add("hidden");
    produtoScreen.classList.remove("hidden");
};
