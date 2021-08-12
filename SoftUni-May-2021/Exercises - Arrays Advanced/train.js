function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacityOfEachWagon = Number(input.shift());
    
    for (let commands of input){
        tokens = commands.split(' ');
        if (tokens[0] === "Add") {
            wagons.push(tokens[1])
        } else {
            tokens = Number(commands);
            for (let i = 0; i < wagons.length; i++){
                if (wagons[i] + tokens <= maxCapacityOfEachWagon) {
                    wagons[i] = wagons[i] + tokens;
                    break;
                }
            }
        }

    }

    console.log(wagons.join(' '));

}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);