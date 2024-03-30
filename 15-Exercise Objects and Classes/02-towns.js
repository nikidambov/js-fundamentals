function towns(input) {
    let towns = [];

    input.forEach(element => {
        [town, latitude, longitude] = element.split(" | ");
        let townObject = {"town": town, "latitude": Number(latitude).toFixed(2), "longitude": Number(longitude).toFixed(2)};
        towns.push(townObject);
    });

    for (let town of towns) {
        console.log(town);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);