"use strict"
//
// const numberOfFilms = +prompt('how many films have you already watched?', '');
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
//
//
// for (let i = 0; i < 2; i++) {
//     const a = prompt('what was the last movie you watched?', '');
//     const b = prompt('his score?', '');
//     personalMovieDB.movies[a] = b;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
//
// if (personalMovieDB.count < 10) {
//     console.log('просмотрено мало фильмов')
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('вы классический пользователь')
// } else if (personalMovieDB.count >= 30) {
//     console.log('вы киноман');
// } else {
//     console.log('произошла ошибка');
// }
//
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


// function-----------------------------------------


// let num = 20;
//
// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }
//
// showFirstMessage('hello world!');
// console.log(num);
//
// function calc(a, b) {
//     return a + b;
// }
//
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(5, 6));
//
// function red() {
//     return 50;
// }
// const anotherNum = red();
// console.log(anotherNum);
//
// const logger = function() {
//     console.log('hello');
// };
//
// logger();
//
// const calcal = (a, b) => {
//     return a + b;
// };
//
// console.log(calcal(4,6))

// function convert(amount) {
//     console.log(28 * amount)
// }
// convert(7)


// Место для первой задачи
// function sayHello(name) {
//     return 'привет,' + name;
// }
//
// console.log(sayHello('ffff'))
//
// // Место для второй задачи
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
//
// console.log(returnNeighboringNumbers(5))

// Место для третьей задачи
// function getMathResult(num, time) {
//     if (typeof(time) !== 'number' || time <= 0) {
//         return num;
//     }
//     let str = '';
//
//     for (let i = 1; i <= time; i++) {
//         if (i === time) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }
//
// console.log(getMathResult(5, 3));
// let r = 0;
// for (let i = 0; i < 3; i++) {
//      r += i
//
// }
//
// console.log(r);

// const str = 'ggfgj';
//
// console.log(str.length)


// Место для первой задачи
// function calculateVolumeAndArea(num) {
//     if (!Number.isInteger(num) || num === null || num < 0 || num === undefined) {
//         return 'При вычислении произошла ошибка';
//     }
//     return `Объем куба: ${Math.pow(num, 3) + }, площадь всей поверхности: ${Math.pow(num, 2) * 6}`;
// }
//
// console.log(calculateVolumeAndArea(5))
// console.log(calculateVolumeAndArea(15))
// console.log(calculateVolumeAndArea(0))
// console.log(calculateVolumeAndArea(15.5))
// console.log(calculateVolumeAndArea(-15))
// console.log(calculateVolumeAndArea(37))
//
// // Место для второй задачи
// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
//
//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }
//
//     for (let i = 4; i <= 36; i = i + 4) {
//         if (seatNumber <= i) {
//             return Math.ceil(i / 4);
//         }
//     }
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }
//
// console.log(getCoupeNumber(4));


// Место для первой задачи
// function getTimeFromMinutes(min) {
//     let hourStr = 'час';
//     let hour = Math.floor(min / 60)
//     let resMin = min - hour * 60;
//     if (hour === 2 ||hour === 3 ||hour === 4) {
//         hourStr += 'а';
//     } else if (hour === 1) {
//         hourStr += '';
//     } else  {
//         hourStr += 'ов'
//     }
//     if (!Number.isInteger(min) || min < 0 || typeof (min) !== 'number') {
//         return 'Ошибка, проверьте данные';
//     }
//     return `Это ${hour} ${hourStr} и ${resMin} минут`;
// }

// Место для второй задачи
// function findMaxNumber(num1, num2, num3, num4) {
//     if (typeof (num1) !== 'number' || typeof (num2) !== 'number' || typeof (num3) !== 'number' || typeof (num4) !== 'number') {
//         return 0;
//     }
//     let res = [];
//     res.push(num1, num2, num3, num4);
//     return res.sort((a, b) => b - a)[0];
// }
//
// console.log(findMaxNumber('jj', 7, 9, 6))
// console.log(findMaxNumber(3, 7, 9, 6))
// console.log(findMaxNumber(3, 7.7, 9, 6))

// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(500));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(120));
// console.log(getTimeFromMinutes(200));


// function fib(n) {
//     if (typeof (n) !== 'number' || n <= 0 || !Number.isInteger(n)) {
//         return '';
//     }
//     let res = [];
//     let one = 0;
//     let two = 1;
//     for (let i = 0; i < n; i++) {
//         if (i + 1 === n) {
//             res.push(one);
//             // Без пробела в конце
//         } else {
//             res.push(one);
//         }
//         let three = one + two;
//         one = two;
//         two = three;
//     }
//     return res.join((' '));
// }
//
// console.log(fib(4));
//
//
// function fib2(num) {
//     if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }
//
//     let result = '';
//     let first = 0;
//     let second = 1;
//
//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }
//
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//
//     return result;
// }
//
// console.log(fib2(5));


// function first() {
//     setTimeout(function () {
//         console.log(1)
//     }, 500);
// }
//
// function second() {
//     console.log(2);
// }
//
// first();
// second();
//
// function learnJs(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }
//
// function done () {
//     console.log('я прошел этот урок!')
// }
//
// learnJs('JS', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         let ttt = 'huj';
//         console.log(('test').toUpperCase() + ' ' + ttt.toUpperCase());
//     }
// };
//
// options.makeTest();
// const {border, bg} = options.color;
// const {name, height, width} = options;
// console.log(border);
// console.log(bg);
// console.log(name);
// console.log(height);
// console.log(width);


// console.log(options.name);
// delete options.name;

// console.log(options);

// let counter = 0;
//
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`property ${i}, have value ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`property ${key}, have value ${options[key]}`);
//         counter++;
//     }
// }
//
// console.log(counter);

// console.log(Object.keys(options).length);


// const arr = [1, 3, 4, 6, 7, 8, 9];
//
//
// arr.forEach((item, i, arr) => {
//     console.log(`${i}: ${item} inside array ${arr}`);
// })


// const str = prompt('', '');
// const products = str.split(', ');
// products.sort((a, b) => a - b);
// console.log(products.join(';'));

let a = 5;
let b = a;
b = b + 5;

console.log(b);
console.log(a);



function copy (mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;

}

const numbers ={
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

let newNumber = copy(numbers);

newNumber.a = 10;

console.log(newNumber);
console.log(numbers);