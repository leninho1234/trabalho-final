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
