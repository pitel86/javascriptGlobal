const divPedidos$$ = document.querySelector('.pedidos');
const ordersUrl = 'http://localhost:3000/orders';
const productsUrl = 'http://localhost:3000/products/';

const getPedidos = async () => {
    const res = await fetch(`${ordersUrl}`);
    const resJson = await res.json();
    pintarPedidos(resJson);
};


const pintarPedidos = (pedidos) => {
    const sortPedidos = pedidos.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    for (let i = 0; i < sortPedidos.length; i++) {
        const pedido = sortPedidos[i];
        const myDiv$$ = document.createElement('div');
        const myH2$$ = document.createElement('h2');
        const dateP$$ = document.createElement('p');
        myH2$$.textContent = `Pedido nº ${pedido.id}`;
        dateP$$.textContent = `Fecha: ${pedido.date}`;
        myDiv$$.appendChild(myH2$$);
        myDiv$$.appendChild(dateP$$);
        for (let j = 0; j < pedido.products.length; j++) {
            const myP$$ = document.createElement('p');
            const product = pedido.products[j];
            myP$$.innerHTML = `${product.quantity} `;
            getProduct(product.productId, myP$$);
            myDiv$$.appendChild(myP$$);
        }
        divPedidos$$.appendChild(myDiv$$);
    }
}


const getProduct = async (id,p$$) => {
    const res = await fetch(`${productsUrl}${id}`);
    const resJson = await res.json();
    pintarProduct(resJson,p$$);
};

const pintarProduct = (resJson,p$$) => {
    p$$.textContent += `${resJson.name}`;
};

getPedidos();