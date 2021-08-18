function storeProvision(currentStock, products){
    let prd = [];
    for (let i = 0; i < currentStock.length; i++){
        if (i % 2 == 0){
            let product = currentStock[i]
            let quantity = Number(currentStock[i + 1])
            let obj = {
                product,
                quantity
            }
        
            prd.push(obj)
        }

    }

    for (let i = 0; i < products.length; i+=2){
        let product = products[i];
        let quantity = Number(products[i + 1]);
        
        let obj = {
            product,
            quantity,
        }
        
        let index = prd.findIndex(x => x.product == product)
        if (index == -1){
            prd.push(obj);
        } else {
            prd[index].quantity += quantity;
        }
    }

    for (let obj of prd){
        console.log(`${obj.product} -> ${obj.quantity}`);
    }


}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);