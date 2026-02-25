# 🛒 Carrinho de Compras

Projeto de um carrinho de compras interativo desenvolvido para praticar a manipulação do DOM (Document Object Model) com JavaScript puro, focado em e-commerce de produtos de beleza. O projeto faz parte do curso de básico de programação da Alura.

---

## 📝 Sobre o Projeto

Este projeto simula a interface de seleção de produtos, definição de quantidades e cálculo dinâmico de valores. Ele permite que o usuário adicione itens a uma lista visual, calculando automaticamente o subtotal de cada inserção e o valor total acumulado da compra.

## ✨ Funcionalidades Principais

* **Seleção de Produtos:** Menu dropdown com nomes e preços pré-definidos.
* **Controle de Quantidade:** Campo numérico para definir quantos itens de cada produto serão adicionados.
* **Listagem em Tempo Real:** Visualização imediata dos itens adicionados no corpo do carrinho.
* **Cálculo Automático:** Atualização instantânea do valor total da compra.
* **Reset do Carrinho:** Função para limpar todos os dados e começar uma nova compra.

---

## ⚙️ Explicação das Principais Funções

### `adicionar()`

É a função mestre que orquestra o fluxo de entrada. Ela captura os elementos do HTML, valida se a quantidade inserida é um número válido e maior que zero, e chama as funções auxiliares para processar os dados antes de atualizar a interface.

### `separarValorNomeItem(itemValor)`

Uma função de tratamento de dados. Como o valor vindo do HTML é uma string única (ex: `"Rímel - R$199,00"`), esta função utiliza um loop e métodos de string (`split`, `replace`, `trim`) para separar o nome do produto do seu valor numérico, garantindo que o cálculo matemático seja preciso.

### `valorCompra()`

Responsável pela lógica financeira. Ela multiplica a quantidade pelo preço unitário e acumula o resultado na variável global `totalCarrinho`, atualizando o texto do elemento HTML correspondente com a formatação de moeda.

### `limpar()`

Função responsável por limpar o carrinho de compras. Ela zera a variável `totalCarrinho`, atualiza o texto quando o carrinho está vazio para "Carrinho Vazio" e é utlizada quando o projeto é iniciado para o carrinho começar vazio.

---

## 🚀 Minhas Implementações e Melhorias

Além das funcionalidades básicas, apliquei boas práticas e tratamentos de erros:

1. **Validação de Input:** Adicionei uma verificação `if (isNaN(quantidadeValor) || quantidadeValor <= 0)` para impedir que o usuário adicione produtos sem quantidade ou com valores negativos, exibindo um alerta amigável.
2. **Estado Inicial Limpo:** Implementei um `EventListener` para o evento `DOMContentLoaded`. Isso garante que, toda vez que a página for carregada ou atualizada, o carrinho comece vazio e o total zerado através da função `limpar()`.
3. **Reset de Campos:** Ao adicionar um item com sucesso, o campo de quantidade é automaticamente limpo, melhorando a experiência do usuário (UX).
4. **Interface Dinâmica:** O carrinho exibe o texto "Carrinho Vazio" de forma elegante quando não há itens, substituindo-o pela lista real assim que o primeiro produto é inserido.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do formulário e exibição dos produtos.
* **CSS3:** Estilização personalizada com uso de **Grid Layout**, **Flexbox** e filtros de design.
* **JavaScript (ES6):** Lógica de programação, manipulação de arrays e eventos do DOM.

---

## 🏃 Como Executar

1. Faça o download ou clone este repositório.
2. Certifique-se de que a estrutura de pastas esteja assim:
```text
/
├── index.html
├── style.css
├── js/
│   └── app.js
└── assets/ (imagens e ícones)

```


3. Abra o arquivo `index.html` em qualquer navegador moderno.
