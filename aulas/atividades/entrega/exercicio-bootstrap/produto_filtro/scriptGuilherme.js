const produtos = [
  { id: 1, nome: "Shampoo Anticaspa", categoria: "Cosméticos", preco: 29.90 },
  { id: 2, nome: "Chocolate Meio Amargo", categoria: "Alimentos", preco: 5.50 },
  { id: 3, nome: "Livro: JavaScript Essencial", categoria: "Livros", preco: 89.90 },
  { id: 4, nome: "Hidratante Corporal", categoria: "Cosméticos", preco: 39.99 },
  { id: 5, nome: "Pacote de Café", categoria: "Alimentos", preco: 17.80 },
  { id: 6, nome: "Livro: HTML e CSS", categoria: "Livros", preco: 75.00 },
  { id: 7, nome: "Sabonete Natural", categoria: "Cosméticos", preco: 9.50 },
  { id: 8, nome: "Biscoito Integral", categoria: "Alimentos", preco: 6.20 }
];

const containerCards = document.getElementById("cards-container");
const botoesFiltro = document.getElementById("filtros");

function criarFiltros() {
  const categorias = ["Todos", ...new Set(produtos.map(p => p.categoria))];

  categorias.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "btn btn-dark";
    btn.textContent = cat;
    btn.onclick = () => filtrarPorCategoria(cat);
    botoesFiltro.appendChild(btn);
  });
}

function renderizarCards(lista) {
  containerCards.innerHTML = "";

  const linha = document.createElement("div");
  linha.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4";

  lista.forEach(produto => {
    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${produto.nome}</h5>
          <p class="card-text">Categoria: ${produto.categoria}</p>
          <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
        </div>
      </div>
    `;

    linha.appendChild(col);
  });

  containerCards.appendChild(linha);
}

function filtrarPorCategoria(categoria) {
  if (categoria === "Todos") {
    renderizarCards(produtos);
  } else {
    const filtrados = produtos.filter(p => p.categoria === categoria);
    renderizarCards(filtrados);
  }
}

criarFiltros();
renderizarCards(produtos);