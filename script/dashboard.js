const lojasElement = document.querySelector(".lojas_container");
let lojas = [
    {
        nome: "nome",
        rating: 3,
    },
    {
        nome: "nome",
        rating: 3,
    },
    {
        nome: "nome",
        rating: 3,
    },
    {
        nome: "nome",
        rating: 3,
    },
    {
        nome: "nome",
        rating: 3,
    },
    {
        nome: "nome",
        rating: 3,
    },
    {
        nome: "nome",
        rating: 3,
    },
    {
        nome: "nome",
        rating: 3,
    },
    {
        nome: "nome",
        rating: 3,
    },
    {
        nome: "nome",
        rating: 3,
    },
];

function createLoja(nome, rating) {
    let loja = document.createElement("div");
    loja.setAttribute("class", "loja");
    let ratingHTML = "";
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            ratingHTML += '<i class="fas fa-star"></i>';
        } else {
            ratingHTML += '<i class="far fa-star"></i>';
        }
    }
    loja.innerHTML = `
    <div class="image">
        <h1></h1>
    </div>
    <div class="name">
        <h3>${nome}</h3>
    </div>
        <div class="rating">${ratingHTML}</div>
    </div>
    `;
    return loja;
}

lojas.forEach((loja) => {
    let lojaElement = createLoja(loja.nome, loja.rating);
    lojasElement.appendChild(lojaElement);
});
