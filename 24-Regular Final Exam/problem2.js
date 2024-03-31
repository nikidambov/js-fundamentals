function solve(input) {
    let num = Number(input.shift());
    for (let i = 0; i < num; i++) {
        const match = input[i].match(/\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#/);
        if (match) {
            let bossName = match[1];
            let title = match[2];
            console.log(`${bossName}, The ${title}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}



solve(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#']);