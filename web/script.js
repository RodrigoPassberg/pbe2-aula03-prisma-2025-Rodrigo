const uri = './assets/produtos.json';
var produtos = [];

//Carrega os dados do Mockup
fetch(uri)
    .then(resp => resp.json())
    .then(resp => { produtos = resp; })
    .then(() => mostrarCards())

function mostrarCards() {
    const main = document.querySelector('main');
    produtos.forEach(p => {
        main.innerHTML += `
        <div class="card">
            <h3>${p.produto}</h3>
            <img src="${p.imagem}" alt="${p.produto}">
            <p>Preco: ${p.preco}</p>
            <button>Detalhes</button>
        </div>
        `;
    })
}