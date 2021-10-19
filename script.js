'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?', '');

		while (
			personalMovieDB.count == '' ||
			personalMovieDB.count == null ||
			isNaN(personalMovieDB.count)
		) {
			personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?', '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			let lastFilm = prompt(
				'Один из последних просмотренных фильмов',
				''
			);
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert('Просмотренно довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			alert('Вы классический зритель');
		} else if (personalMovieDB.count > 30) {
			alert('Вы киноман');
		} else {
			alert('Ошибка, попробуйте еще');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		for (let i = 0; i < 3; i++) {
			let genres = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

			if (genres === '' || genres == null) {
				console.log(
					'Вы ввели некорректные данные или не ввели их вовсе'
				);
				i--;
			} else {
				personalMovieDB.genres[i] = genres;
			}
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр №${i + 1} - это ${item}`);
		});
	},
};

console.log(personalMovieDB);
