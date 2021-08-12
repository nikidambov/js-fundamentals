function solve(input) {
    for (let towns of input) {
    let splittedinput = towns.split(" | ");

    let town = splittedinput[0];
    let latitude = Number(splittedinput[1]).toFixed(2);
    let longitude = Number(splittedinput[2]).toFixed(2);

    let textTable = {
        town,
        latitude,
        longitude,
    }
    console.log(textTable);
    }

}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);