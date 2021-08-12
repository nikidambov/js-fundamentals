function vacation(people, type, day){
    let result = 0;

    if (type === 'Business' && people >= 100){
        people = people - 10;
    }


    if (type === 'Students' && day === 'Friday'){
        result = people * 8.45;

    } else if (type === 'Students' && day === 'Saturday') {
        result = people * 9.80;

    } else if (type === 'Students' && day === 'Sunday') {
        result = people * 10.46;

    } else if (type === 'Business' && day === 'Friday') {
        result = people * 10.90;

    } else if (type === 'Business' && day === 'Saturday') {
        result = people * 15.60;

    } else if (type === 'Business' && day === 'Sunday') {
        result = people * 16;

    } else if (type === 'Regular' && day === 'Friday') {
        result = people * 15;

    } else if (type === 'Regular' && day === 'Saturday') {
        result = people * 20;

    } else if (type === 'Regular' && day === 'Sunday') {
        result = people * 22.50;

    }

    if (type === 'Students' && people >= 30){
        result = 0.85 * result;
    } else if (type === 'Regular' && people >= 10 && people <= 20){
        result = result * 0.95;
    }


    console.log(`Total price: ${result.toFixed(2)}`)

}

vacation(40,
    "Regular",
    "Saturday"
    )
