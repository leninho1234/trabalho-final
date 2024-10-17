let total = 0;

function adicionarAoCarrinho(nome, preco) {
    const itensCarrinho = document.getElementById('itensCarrinho');
    const item = document.createElement('li');
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    itensCarrinho.appendChild(item);
    
    total += preco;
    document.getElementById('total').textContent = total.toFixed(2);
}

function finalizarCompra() {
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
    // Limpar o carrinho
    document.getElementById('itensCarrinho').innerHTML = '';
    total = 0;
    document.getElementById('total').textContent = total.toFixed(2);
}














// Exemplo de carrinho
let carrinho = [
    { id: 1, nome: 'Produto A', preco: 10.00 },
    { id: 2, nome: 'Produto B', preco: 20.00 },
    { id: 3, nome: 'Produto C', preco: 15.00 }
];

// Função para remover um item do carrinho pelo ID
function removerItemDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    console.log('Item removido. Carrinho atualizado:', carrinho);
}

// Exemplo de uso: Remover o produto com id 2
removerItemDoCarrinho(2);
