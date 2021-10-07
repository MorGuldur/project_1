'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

const personalMovieDB = {};

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

let lastFilm1 = prompt('Один из последних просмотренных фильмов', '');
let filmValue1 = +prompt('На сколько оцените его?', '');
let lastFilm2 = prompt('Один из последних просмотренных фильмов', '');
let filmValue2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm1] = filmValue1;
personalMovieDB.movies[lastFilm2] = filmValue2;

console.log(personalMovieDB);
