function solve(currentProduct, products) {
    let store = [];

    for (let i = 0; i < currentProduct.length; i+=2) {
        let product = currentProduct[i]
        let quantity = Number(currentProduct[i+1]);
        
        let objectProducts = {
            product,
            quantity,
        }

        store.push(objectProducts);
    }

    for (let i = 0; i < products.length; i+=2) {
        let product = products[i]
        let quantity = Number(products[i+1]);
        
        let objectProducts = {
            product,
            quantity,
        }

        let indexOfProduct = store.findIndex(x => x.product === product);

        if (indexOfProduct === -1){
            store.push(objectProducts);
        } else {
            store[indexOfProduct].quantity += quantity
        }
    }

    for (let namez of store) {
        console.log(`${namez.product} -> ${namez.quantity}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);