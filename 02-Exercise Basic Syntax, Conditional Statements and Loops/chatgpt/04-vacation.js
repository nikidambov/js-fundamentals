function calculatePrice(groupSize, groupType, dayOfWeek) {
    const prices = {
        "Students": {
            "Friday": 8.45,
            "Saturday": 9.80,
            "Sunday": 10.46
        },
        "Business": {
            "Friday": 10.90,
            "Saturday": 15.60,
            "Sunday": 16
        },
        "Regular": {
            "Friday": 15,
            "Saturday": 20,
            "Sunday": 22.50
        }
    };
    let price = prices[groupType][dayOfWeek] * groupSize;
    if (groupType === "Students" && groupSize >= 30) {
        price *= 0.85;
    } else if (groupType === "Business" && groupSize >= 100) {
        price -= (10 * prices[groupType][dayOfWeek]);
    } else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20) {
        price *= 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

calculatePrice(30, "Students", "Sunday");