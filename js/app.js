let valorCarrinho = 0;
let nomeProduto = "";
let precoProduto = 0;
let quantidadeValor = 0
let totalCarrinho = 0

function adicionar() {
    let item = document.getElementById('produto'); // coleta pelo id 'produto'
    let itemTexto = item.value; // Coleta o valor 
    let itemValor = itemTexto.split("-"); // Separa o valor do texto em uma array
    let quantidade = document.getElementById('quantidade'); // Coleta a quantidade inserida pelo usuário
    quantidadeValor = parseInt(quantidade.value);
    let textoCarrinho = document.getElementById('lista-produtos'); // texto do carrinho

    if (isNaN(quantidadeValor) || quantidadeValor <= 0) { // irá garantir que não vai inserir um número igual ou menor que 0
        alert("Insira uma quantidade válida!");
        return;
    }

    separarValorNomeItem(itemValor);
    valorCompra();

    // Atualiza o HTML do carrinho
    if  (textoCarrinho.innerHTML.includes("Vazio")) {
                textoCarrinho.innerHTML = `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidadeValor}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto.toFixed(2)}</span>
            </section>`;
    } else {
                        textoCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidadeValor}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto.toFixed(2)}</span>
            </section>`;
    }
    
    document.getElementById('quantidade').value = ''; // Limpando campo de quantidade
}

function limpar() {
    textoCarrinho = document.getElementById('lista-produtos'); // texto do carrinho
    textoCarrinho.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul"> Carrinho </span> Vazio<span class="texto-azul">.</span>
        </section>`;
    let elementoTotal = document.getElementById('valor-total');
    elementoTotal.textContent = `R$ 0`;
    totalCarrinho = 0;
    document.getElementById('quantidade').value = ''; // Limpando campo de quantidade
}

function separarValorNomeItem(itemValor) {
    // 'item' será cada pedaço da sua array (ex: "Celular" depois " R$1400")
    for (let item of itemValor) {
        // Verificamos se o item atual contém o símbolo R$
        if (item.includes("R$")) {
            // Removemos o R$ e convertemos para número decimal
            precoProduto = parseFloat(item.replace("R$", "").trim());
            alert(precoProduto)
        } else {
            // Se não tem R$, é o nome do produto
            nomeProduto = item.trim();
        }
    }
}

function valorCompra() {
    valorCarrinho =  quantidadeValor * precoProduto; // Gerando o valor total 
    totalCarrinho = valorCarrinho + totalCarrinho // Somando o valor total com todos os itens

    // Captura o elemento do total e atualiza o texto
    let elementoTotal = document.getElementById('valor-total');
    elementoTotal.textContent = `R$ ${totalCarrinho.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    limpar(); // Chama a função que limpa o carrinho ao iniciar
    console.log("A página carregou e o carrinho foi esvaziado!");
});


