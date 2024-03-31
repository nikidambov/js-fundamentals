function solve(input) {
    let password = input.shift();
    let command = input.shift();

    while (command !== "Complete") {
        if (command.includes("Make Upper")) {
            let commandSplitted = command.split(" ");
            let index = commandSplitted[2];

            let splittedPassword = password.split("");
            splittedPassword[index] = splittedPassword[index].toUpperCase();
            password = splittedPassword.join("");

            console.log(password);
        } else if (command.includes("Make Lower")) {
            let commandSplitted = command.split(" ");
            let index = commandSplitted[2];

            let splittedPassword = password.split("");
            splittedPassword[index] = splittedPassword[index].toLowerCase();
            password = splittedPassword.join("");

            console.log(password);
        } else if (command.includes("Insert")) {
            let commandSplitted = command.split(" ");
            let index = commandSplitted[1];
            let char = commandSplitted[2];

            let splittedPassword = password.split("");
            if (splittedPassword[index]) {
                splittedPassword.splice(index, 0, char);
                password = splittedPassword.join("");

                console.log(password);
            }


        } else if (command.includes("Replace")) {
            let commandSplitted = command.split(" ");
            let char = commandSplitted[1];
            let value = Number(commandSplitted[2]);
            if (password.includes(char)) {
                let asciiValue = Number(char.charCodeAt(0));
                let newAsciiValue = Number(value) + Number(asciiValue);
                let newAsciiChar = String.fromCharCode(newAsciiValue);

                // password = password.replace(new RegExp(char, 'g'), newAsciiChar);
                password = password.split(char).join(newAsciiChar);
                console.log(password);
            }

        } else if (command === "Validation") {
            if (password.length < 8) {
                console.log("Password must be at least 8 characters long!");
            }
            if (/[^A-Za-z0-9_]/.test(password)) {
                console.log("Password must consist only of letters, digits and _!");
            }
            if (password === password.toLowerCase()) {
                console.log("Password must consist at least one uppercase letter!");
            }
            if (password === password.toUpperCase()) {
                console.log("Password must consist at least one lowercase letter!");
            }
            if (!/\d/.test(password)) {
                console.log("Password must consist at least one digit!");
            }
        }



        command = input.shift();
    }
}

// solve(['invalidpassword*',
//     'Add 2 p',
//     'Replace i -50',
//     'Replace * 10',
//     'Make Upper 2',
//     'Validation',
//     'Complete']);

solve(['123456789*$',
    'Insert 3 R',
    'Replace O 15',
    'Validation',
    'Make Lower 3',
    'Complete']);

