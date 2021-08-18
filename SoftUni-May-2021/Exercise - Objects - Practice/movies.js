function movies(input){
    let array = [];

    for (let movie of input){
        if (movie.includes('addMovie')){
            let [addMovie, ...movieName] = movie.split(' ')
            movieName = movieName.join(' ');
            let obj = {
                name: movieName,
            }
            array.push(obj)
        } else if (movie.includes('directedBy')){
            let tokens = movie.split(' ');
            let indexOfDirectedBy = tokens.findIndex(x => x === 'directedBy');

            let nameFilm = [];
            let directorFilm = [];

            for (let i = 0; i < indexOfDirectedBy; i++){
                nameFilm.push(tokens[i])
            }

            for (let i = indexOfDirectedBy + 1; i < tokens.length; i++){
                directorFilm.push(tokens[i])
            }

            let name = nameFilm.join(' ');
            let director = directorFilm.join(' ');
            
            let movieExist = array.find(x => x.name === name)
            if (movieExist){
                movieExist.director = director
            }
        } else if (movie.includes('onDate')){
            let tokens = movie.split(' ');
            let date = tokens.pop();
            let onDate = tokens.pop();
            let name = tokens.join(' ');

            let movieExist = array.find(x => x.name === name)
            if (movieExist){
                movieExist.date = date
            }
        }
    }
    for (let obj of array){
        if (obj.name && obj.director && obj.date){
            console.log(JSON.stringify(obj));
        }
    }
}

movies([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]);