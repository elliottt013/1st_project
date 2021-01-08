"use strict";

let numberOfFilms;

function start () {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
    
        let question1 = prompt('Один из последних просмотренных фильмов?', ''),
            question2 = prompt('На сколько оцените его?', '');
        
        if (question1 != '' && question2 != '' && question1 != null && question2 != null && question1.length < 50) {
            personalMovieDB.movies[question1] = question2;
        } else {
            i--;
        }
    
    }
}

// rememberMyFilms();



// let i = 0;

// do
// {
//     let question1 = prompt('Один из последних просмотренных фильмов?', ''),
//         question2 = prompt('На сколько оцените его?', '');
//     i++;
    
//     if (question1 != '' && question2 != '' && question1 != null && question2 != null && question1.length < 50) {
//         personalMovieDB.movies[question1] = question2;
//         console.log('Ok!!!');
//     } else {
//         i--;
//     }
// }
// while (i<2);

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.counts >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();



// function summa (a, b, C) {
//     return (a+b);
// }

// console.log(summa(3,5, 4));

// let nameeees = 'Akhmed';

// nameeees = nameeees.toUpperCase();
// console.log(nameeees);

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

function showMyDB (hidden) {
    if (!hidden) {  //проверка скрыта или открыта
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i < 4; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
    
}

writeYourGenres();
