let numbers = prompt(`Nechta film korgansiz`),
    movies,
    moviesNumber;
if (!isNaN(numbers) && typeof +numbers == "number" && numbers !== 0) {
    let infoMovies = {
        count: numbers,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    }
    console.log(infoMovies);
    for (let i = 0; i < numbers; i++) {
        let firstQuestion = prompt('oxirgi korgan kinoiz?')
        let SecondQuestion = prompt('baxolang')
        if (firstQuestion == '' || firstQuestion == null || SecondQuestion == '' || SecondQuestion == null) {
            i--
        } else {
            infoMovies[firstQuestion] = SecondQuestion;
        }
    }
}

if(numbers < 10){
    console.log('Siz kam kino korgansiz')
}else if(numbers < 30){
    console.log('Siz kinolarni yoqtirar ekan siz')
}else if( numbers > 30 ){
    console.log('Siz kop kinolar korgan ekansiz')
}else{
    console.log('Xatolik roy berdi 1:Raqamlar bolsin')
}