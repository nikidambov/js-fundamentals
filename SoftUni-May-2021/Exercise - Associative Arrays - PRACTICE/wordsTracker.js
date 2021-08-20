function wordsTracker(input){
    let obj = {

    };

    let words = input.shift().split(' ');

    for (let word of words){
        obj[word] = 0;
    }

    for (let word of input){
        if (Object.keys(obj).includes(word)){
            obj[word] += 1
        }
    }
    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1])
    for (let [key, value] of sorted){
        console.log(`${key} - ${value}`)
    }
}

wordsTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]);