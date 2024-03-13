function city(input) {
    for (let property in input) {
        console.log(`${property} -> ${input[property]}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});