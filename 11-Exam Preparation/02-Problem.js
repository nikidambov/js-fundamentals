function shoppingList(input) {
    let list = input.shift().split("!");
    let command = input.shift();

    while (command !== "Go Shopping!") {
        let actionSplit = command.split(" ");
        let action = actionSplit[0];

        if (action === "Urgent") {
            let item = actionSplit[1];
            if (!list.includes(item)) {
                list.unshift(item);
            }
        } else if (action === "Unnecessary") {
            let item = actionSplit[1];
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1);
            }
        } else if (action === "Correct") {
            let oldItem = actionSplit[1];
            let newItem = actionSplit[2];

            if (list.includes(oldItem)) {
                let index = list.indexOf(oldItem);
                list[index] = newItem;
            }
        } else if (action === "Rearrange") {
            let item = actionSplit[1];
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1);
                list.push(item);
            }
        }

        command = input.shift();
    }

    console.log(list.join(", "));
}

// shoppingList((["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"]));

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);