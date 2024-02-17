function houseParty(arr) {
    let guests = [];

    for (let guest of arr) {
        let person = guest.split(" ");
        let personName = person.shift();
        let command = person.join(" ");

        if (command === "is going!") {
            if (!guests.includes(personName)) {
                guests.push(personName);
            } else {
                console.log(`${personName} is already in the list!`);
            }
        } else if (command === "is not going!") {
            if (!guests.includes(personName)) {
                console.log(`${personName} is not in the list!`);
            } else {
                let index = guests.indexOf(personName);
                guests.splice(index, 1);
            }
        }
       
    }

    // for (let i = 0; i < arr.length; i++) {
    //     let person = arr[i].split(" ");
    //     let personName = person.shift();
    //     let command = person.join(" ");

    //     if (command === "is going!") {
    //         if (!guests.includes(personName)) {
    //             guests.push(personName);
    //         } else {
    //             console.log(`${personName} is already in the list!`);
    //         }
    //     } else if (command === "is not going!") {
    //         if (!guests.includes(personName)) {
    //             console.log(`${personName} is not in the list!`);
    //         } else {
    //             let index = guests.indexOf(personName);
    //             guests.splice(index, 1);
    //         }
    //     }
       
    // }

    console.log(guests.join('\n'));
}

// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']);

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);