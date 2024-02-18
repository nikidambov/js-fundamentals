function theAngryCat(priceRatings, entryPoint, typeOfItem) {
    let leftDamage = 0;
    let rightDamage = 0;


    for (let i = 0; i < priceRatings.length; i++) {
        if (i < entryPoint) {
            if (typeOfItem === "cheap" && priceRatings[i] < priceRatings[entryPoint]) {
                leftDamage += priceRatings[i];
            } else if (typeOfItem === "expensive" && priceRatings[i] >= priceRatings[entryPoint]) {
                leftDamage += priceRatings[i];
            }
        } else if (i > entryPoint) {
            if (typeOfItem === "cheap" && priceRatings[i] < priceRatings[entryPoint]) {
                rightDamage += priceRatings[i];
            } else if (typeOfItem === "expensive" && priceRatings[i] >= priceRatings[entryPoint]) {
                rightDamage += priceRatings[i];
            }
        }

    }

    if (leftDamage >= rightDamage) {
        console.log(`Left - ${leftDamage}`);
    } else {
        console.log(`Right - ${rightDamage}`);
    }

}


theAngryCat([5, 10, 12, 5, 4, 20],
3,
"cheap");

// theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
//     7,
//     "expensive");