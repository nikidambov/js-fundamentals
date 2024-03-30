function storeProvision(stock, orderedProducts) {
    let products = [];

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let productQuantity = Number(stock[i + 1]);

        let productObject = { name: product, quantity: productQuantity };
        products.push(productObject);
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i];
        let productQuantity = Number(orderedProducts[i + 1]);

        let productFound = products.find(p => p.name === product);

        if (productFound) {
            productFound.quantity += productQuantity;
        } else {
            let productObject = { name: product, quantity: productQuantity };
            products.push(productObject);
        }

    }

    for (let productObject of products) {
        console.log(`${productObject.name} -> ${productObject.quantity}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);