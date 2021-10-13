'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

	while (
		numberOfFilms == '' ||
		numberOfFilms == null ||
		isNaN(numberOfFilms)
	) {
		numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
	}
}
start();

const personalMovieDB = {};

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотренно довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		alert('Вы киноман');
	} else {
		alert('Ошибка, попробуйте еще');
	}
}
detectPersonalLevel();

function rememberMyFilms() {
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
}
rememberMyFilms();

function showMyDB() {
	if (personalMovieDB.privat === false) {
		console.log(personalMovieDB);
	}
}
showMyDB();

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDB.genres.push(
			prompt(`Ваш любимый жанр под номером ${i + 1}`, '')
		);
	}
}
writeYourGenres();

console.log(personalMovieDB);
