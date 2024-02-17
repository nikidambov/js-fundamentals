function arrayManipulator(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(" ");
        let action = tokens.shift();

        if (action === "add") {
            let index = Number(tokens.shift());
            let element = Number(tokens.shift());

            numbers.splice(index, 0, element);
        } else if (action === "addMany") {
            let index = Number(tokens.shift());

            for (let item of tokens) {
                item = Number(item);
                numbers.splice(index, 0, item);
                index++;
            }
        } else if (action === "contains") {
            let item = Number(tokens.shift());

            let index = numbers.indexOf(item);
            console.log(index);
        } else if (action === "remove") {
            let index = Number(tokens.shift());
            numbers.splice(index, 1);
        } else if (action === "shift") {
            let rotations = Number(tokens.shift());

            for (let i = 1; i <= rotations; i++) {
                let firstItem = numbers.shift();
                numbers.push(firstItem);
            }
        } else if (action === "sumPairs") {
            let pairedNums = [];

            for (let i = 0; i < numbers.length; i += 2) {
                if (i + 1 < numbers.length) {
                    pairedNums.push(numbers[i] + numbers[i + 1]);
                } else {
                    pairedNums.push(numbers[i]);
                }
            }

            numbers = pairedNums;
        } else if (action === "print") {
            console.log(`[ ${numbers.join(", ")} ]`);
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);