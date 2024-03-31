function solve(input) {

    let followers = {};
    let currentCommand = input.shift();
    while (currentCommand !== "Log out") {
        let tokens = currentCommand.split(": ");
        let command = tokens[0];
        let username = tokens[1];

        if (command === "New follower") {
            if (!followers.hasOwnProperty(username)) {
                followers[username] = { likes: 0, comments: 0 };
            }
        } else if (command === "Like") {
            let count = Number(tokens[2]);
            if (!followers.hasOwnProperty(username)) {
                followers[username] = { likes: count, comments: 0 };
            } else {
                followers[username].likes += count;
            }
        } else if (command === "Comment") {
            if (!followers.hasOwnProperty(username)) {
                followers[username] = { likes: 0, comments: 1 };
            } else {
                followers[username].comments++;
            }
        } else if (command === "Blocked") {
            if (followers.hasOwnProperty(username)) {
                delete followers[username];
            } else {
                console.log(`${username} doesn't exist.`);
            }
        }


        currentCommand = input.shift();
    }

    console.log(Object.keys(followers).length + " followers");

    for (let follower in followers) {
        console.log(`${follower}: ${followers[follower].likes + followers[follower].comments}`);
    }

}

solve(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"]);