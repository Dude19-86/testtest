const numberOfFilms = +prompt('how many films have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const a = prompt('what was the last movie you watched?', ''),
    b = +prompt('his score?', ''),
    c = prompt('what was the last movie you watched?', ''),
    d = +prompt('his score?', '');

personalMovieDB['movies'][a] = b;
personalMovieDB['movies'][c] = d;
console.log(personalMovieDB);