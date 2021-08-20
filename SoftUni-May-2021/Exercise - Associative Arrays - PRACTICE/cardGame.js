function cardGame(input){
    let symbolPoints = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14, 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    let playerName = {

    };
    let results = {

    };

    for (let text of input){
        let tokens = text.split(': ');
        let name = tokens[0];
        let cards = tokens[1].split(', ');

        if (!Object.keys(playerName).includes(name)){
            playerName[name] = [];
        }

        playerName[name] = playerName[name].concat(cards);
    }

    for (let [name, playerCARDS] of Object.entries(playerName)){
        results[name] = 0;

        for (let i = 0; i < playerCARDS.length; i++){
            let card = playerCARDS[i];

            if (playerCARDS.indexOf(card) === i){
                let cardAsArray = card.split('');
                let type = cardAsArray.pop();
                let power = cardAsArray.join('');
                let cardPoints = 0;

                if (Object.keys(symbolPoints).includes(power)){
                    cardPoints = symbolPoints[power] * symbolPoints[type];
                } else {
                    cardPoints = Number(power) * symbolPoints[type]
                }

                results[name] += cardPoints;
            }
        }
    }

    for (let [key, value] of Object.entries(results)){
        console.log(`${key}: ${value}`)
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);