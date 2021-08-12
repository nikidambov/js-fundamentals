function charactersInRange (firstCharacter, secondCharacter) {
    let min = firstCharacter.charCodeAt(0);
    let max = secondCharacter.charCodeAt(0);
    let result = '';

    let firstCharacterNumber = firstCharacter.charCodeAt(0);
    let secondCharacterNumber = secondCharacter.charCodeAt(0);

    if (firstCharacterNumber > secondCharacterNumber) {
        min = secondCharacter.charCodeAt(0);
        max = firstCharacter.charCodeAt(0);
    }

    for (let i = min + 1; i < max; i++) {
        let character = String.fromCharCode(i);
        result += character + ' ';
    }

    return result;
}

charactersInRange('C',
'#');