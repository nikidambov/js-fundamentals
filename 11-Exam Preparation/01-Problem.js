function blackFlag(input) {
    let plunderDays = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let totalPlunder = 0;

    for (let day = 1; day <= plunderDays; day++) {
        totalPlunder += dailyPlunder;

        if (day % 3 === 0) {
            totalPlunder += (dailyPlunder * 0.5);
        }

        if (day % 5 === 0) {
            totalPlunder -= (totalPlunder * 0.3);
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let leftPercent = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${leftPercent.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5",
    "40",
    "100"]);