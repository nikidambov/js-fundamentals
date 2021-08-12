function arrayRotation (first, second) {

    for(let i = 0; i < second; i++){
        let firstEl = first[0];

        for(let j = 0; j < first.length - 1; j++){
            first[j] = first[j + 1];
        }

        let lastIndex = first.length - 1;
        first[lastIndex] = firstEl;

    }

    console.log(first.join(' '));

}

arrayRotation([51, 47, 32, 61, 21], 2);