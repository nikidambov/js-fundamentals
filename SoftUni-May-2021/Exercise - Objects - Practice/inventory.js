function inventory(input){
    let heroes = [];

    for (let hero of input){
        let tokens = hero.split(' / ');
        let name = tokens[0];
        let level = tokens[1];
        let items = tokens[2].split(', ');

        let obj = {
            name,
            level,
            items,
        }

        heroes.push(obj);
    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level)

    for (let hero of sortedHeroes){
        let sortedItems = hero.items.sort((a, b) => a.localeCompare(b)).join(', ');
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${sortedItems}`)
    }
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);