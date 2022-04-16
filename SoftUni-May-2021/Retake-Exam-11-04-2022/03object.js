function solve(input){
    let object = {};
    let soldFoods = 0;
    
    while(input[0] != "Complete"){
        let tokkens = input.shift().split(' ');
        let command = tokkens[0];
        let quantity = Number(tokkens[1]);
        let food = tokkens[2];
        if (command == "Receive"){
            if (quantity <= 0) {

            } else {
                if (!Object.keys(object).includes(food)){
                  
                    
                        object[food] = {
                            quantity
                        };
                
                } else {
                    object[food].quantity = object[food].quantity + quantity;
                }
            }
            

        } else if (command == "Sell") {
            if (!Object.keys(object).includes(food)){
                console.log(`You do not have any ${food}.`);
                
            } else {
            if (Object.keys(object).includes(food)){
            if (quantity > object[food].quantity){
                soldFoods += object[food].quantity;
                console.log(`There aren't enough ${food}. You sold the last ${object[food].quantity} of them.`);
                object[food].quantity = object[food].quantity - quantity;
                delete object[food];
                
            } else {
                object[food].quantity = object[food].quantity - quantity
                console.log(`You sold ${quantity} ${food}.`);
                soldFoods += quantity;
                if (object[food].quantity == 0){
                    delete object[food];
                }
            }
        }
    }
        }   
            

    }  
    
    for (let data of Object.entries(object)){
        let foood = data[0];
        let qua = data[1];
        console.log(`${foood}: ${qua.quantity}`);
    }
    console.log(`All sold: ${soldFoods} goods`);

}

solve(["Receive 10 muffins",
"Receive 23 bagels",
"Sell 5 muffins",
"Sell 10 bagels",
"Complete"]);