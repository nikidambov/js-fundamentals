function houseParty(guests) {
    let list = [];

    for (let i = 0; i < guests.length; i++) {
        let guestsList = guests[i].split(' ');
        let name = guestsList[0];

        if (guestsList[2] === 'going!') {
            if (!(list.includes(guestsList[0]))) {
                list.push(guestsList[0])
                
            } else {
                console.log(`${name} is already in the list!`)
            }
                
        
            
        }
         if (guestsList[2] === 'not') {
            if (list.includes(name)){
             list.splice(list.indexOf(name), 1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
        
        

    }
    
    console.log(list.join("\n"));

    

}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);