"use strict"

// const numberOfFilms = +prompt('how many films have you already watched?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
// const a = prompt('what was the last movie you watched?', ''),
//     b = +prompt('his score?', ''),
//     c = prompt('what was the last movie you watched?', ''),
//     d = +prompt('his score?', '');

// personalMovieDB['movies'][a] = b;
// personalMovieDB['movies'][c] = d;
// console.log(personalMovieDB);

// const num = 100;
//
// switch (num) {
//     case 49:
//         console.log('wrong');
//         break;
//     case 100:
//         console.log('wrong 100');
//         break;
//     case 50:
//         console.log('true');
//         break;
//     default:
//         console.log('bull shit');
//         break;
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
//
// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('zaebok')
// } else {
//     console.log('fuck')
// }
//
// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets)
//
// let johnReport, alexReport, samReport, mariaReport = 'done';
// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log(25 || null && !3);
// console.log(!1 && 2 || !3);
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);
// console.log(true || 5);


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
//
// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// } else {
//     console.log('fuck you');
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
//
// while (num <= 55);

// for (let i = 0; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }
//
// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = "";
// let length = 7;
// for (let i = 1; i < length; i++) {
//
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
//
// console.log(result);












// first: for (let i = 0; i < 3; i++) {
//     console.log(`first level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) break first;
//             console.log(`third level: ${k}`);
//         }
//     }
// }







// // Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i <= 10; i++) {
//         console.log(i)
//     }
// }
//
// // firstTask();
//
// // Место для второй задачи
// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) {
//             break;
//         }
//         // console.log(i);
//     }
// }
//
// secondTask();
//
// // Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
//
// // thirdTask();
//
// // Место для четвертой задачи
//
// // Цикл, который нужно переписать:
//
// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }
//
// function fourthTask() {
//     // Пишем решение вот тут
//     let i = 3;
//     while (i <= 16) {
//         console.log(i);
//         i += 2;
//     }
// }
//
// // fourthTask()
// // Место для пятой задачи
//
// function fifthTask() {
//     const arrayOfNumbers = [];
//
//     // Пишем решение вот тут
//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers.push(i);
//     }
//
//
//     // Не трогаем
//     return arrayOfNumbers;
// }
//
// console.log(fifthTask());


// Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (const key in arr) {
//         result.push(arr[key]);
//     }
//
//     // Пишем решение вот тут
//
//
//     // Не трогаем
//     return result;
// }
//
// console.log(firstTask());
//
// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     let data = [5, 10, 'Shopping', 20, 'Homework'];
//
//     // Пишем решение вот тут
//     for (const key in data) {
//         if (typeof data[key] === 'string') {
//             data[key] += ' - done';
//         } else {
//             data[key] = data[key] * 2;
//         }
//     }
//
//     // Не трогаем
//     return data;
// }
//
// console.log(secondTask());
//
// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//
//     // Пишем решение вот тут
//     for (const key in data) {
//         result.unshift(data[key]);
//     }
//
//     // Не трогаем
//     return result;
// }
//
// console.log(thirdTask());

// const lines = 5;
// let result = '';
// // let fuck = '';
// // Проверяется именно переменная result, формируйте строку в ней
//
// for (let i = 0; i <= lines; i++) {
//     // fuck += i;
//     for (let j = 0; j < lines - i; j++) {
//
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
//
// console.log(result);

//
// let result = "";
// let length = 7;
// for (let i = 1; i < length; i++) {
//
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
//
// console.log(result);

