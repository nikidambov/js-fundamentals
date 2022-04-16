function solve(input){
    let text = input.shift();
    let result = text;
    while(input[0] != "For Azeroth"){
        let tokkens = input.shift().split(' ');
        
        if (tokkens[0] == "GladiatorStance"){
            result = result.toUpperCase();
            console.log(result);

        } else if (tokkens[0] == "DefensiveStance"){
            result = result.toLowerCase();
            console.log(result);

        } else if (tokkens[0] == "Dispel"){
            let index = Number(tokkens[1]);
            let letter = tokkens[2];

            if (result.length < index){
                console.log("Dispel too weak.");
            } else {
                result = result.split('');
                result[index] = letter;
                result = result.join('');
                console.log("Success!");
            }

        } else if (tokkens[1] == "Change"){
            let first = tokkens[2];
            let second = tokkens[3];

            result = result.split(first).join(second);
            console.log(result)

        } else if (tokkens[1] == "Remove"){
            let p1 = tokkens[2];
            if (result.includes(p1)){
            result = result.replace(p1, '');
            console.log(result);
            }
        } else {
            console.log("Command doesn't exist!");
        }
        

       
    }
}

solve((["fr1c710n",
"GladiatorStance",
"Dispel 2 I",
"Dispel 4 T",
"Target Change RICTION riction",
"For Azeroth"]));