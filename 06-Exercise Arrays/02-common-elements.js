function commonElements(firstArr, secondArr) {
    for (let el of firstArr) {
        if(secondArr.includes(el)) {
            console.log(el);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);