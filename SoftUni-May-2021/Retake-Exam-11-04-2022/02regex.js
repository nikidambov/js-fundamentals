function solve(input){
    let text = input[0];
    let pattern = /(#|$|%|&|\*)([A-Za-z]+)\1=(\d{1,})(!!\w.+!!)/g
    let match = pattern.exec(text);

    while (match != null){
        
        console.log(match)
        
        

        match = pattern.exec(text);
    }
}

solve(["%GiacomoAgostini%=7!!hbqw",
"&GeoffDuke*=6!!vjh]zi",
"JoeyDunlop=10!!lkd,rwazdr",
"Mike??Hailwood=5!![pliu",
"#SteveHislop#=16!!df%TU[Tj(h!!TT[S"]);