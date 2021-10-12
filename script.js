'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

const personalMovieDB = {};

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

if (personalMovieDB.count < 10) {
	alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	alert('Вы киноман');
} else {
	alert('Ошибка, попробуйте еще');
}

for (let i = 0; i < 2; i++) {
	let lastFilm = prompt('Один из последних просмотренных фильмов', '');
	let filmValue = +prompt('На сколько оцените его?', '');

	if (
		lastFilm !== '' &&
		filmValue !== '' &&
		lastFilm !== null &&
		filmValue !== null &&
		lastFilm.length < 50
	) {
		personalMovieDB.movies[lastFilm] = filmValue;
	} else {
		i--;
	}
}

console.log(personalMovieDB);
