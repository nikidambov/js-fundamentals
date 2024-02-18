function taxCalculator(input) {
    let vehicles = input.shift().split(">>");
    let totalTaxToPay = 0;
    let totalTaxCollected = 0;

    while (vehicles.length > 0) {
        let currentVehicle = vehicles.shift().split(" ");
        let carType = currentVehicle[0];
        let year = Number(currentVehicle[1]);
        let km = Number(currentVehicle[2]);

        if (carType === "family") {
            totalTaxToPay = 50;
            totalTaxToPay -= (5 * year);
            totalTaxToPay += Math.floor(km / 3000) * 12;
        } else if (carType === "heavyDuty") {
            totalTaxToPay = 80;
            totalTaxToPay -= (8 * year);
            totalTaxToPay += Math.floor(km / 9000) * 14;
        } else if (carType === "sports") {
            totalTaxToPay = 100;
            totalTaxToPay -= (9 * year)
            totalTaxToPay += Math.floor(km / 2000) * 18;
        } else {
            console.log("Invalid car type.");
            continue;
        }

        totalTaxCollected += totalTaxToPay;

        console.log(`A ${carType} car will pay ${totalTaxToPay.toFixed(2)} euros in taxes.`);
    }

    console.log(`The National Revenue Agency will collect ${totalTaxCollected.toFixed(2)} euros in taxes.`);
}


taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);