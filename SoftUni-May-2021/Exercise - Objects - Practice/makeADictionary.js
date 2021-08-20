function makeADictionary(input){
    let array = [];
    for (let string of input){
        let obj = JSON.parse(string)
        for (let [key, value] of Object.entries(obj)){
            let object2 = {
                term: key,
                definition: value,
            }
            let find = array.find(x => x.term === object2.term)
            if (find == undefined){
                array.push(object2);
            } else {
                let index = array.find(x => x.term === object2.term);
                index.definition = object2.definition;
            }
        }
        
    }
    let sorted = array.sort((a, b) => a.term.localeCompare(b.term))
    
    for (let a of sorted){
        
        console.log(`Term: ${a.term} => Definition: ${a.definition}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);