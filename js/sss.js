// console.log(new Date('2022-06-12T09:15'))


// slider

// const sliderImg = [
//     'img/slider/food-12.jpg',
//     'img/slider/olive-oil.jpg',
//     'img/slider/paprika.jpg',
//     'img/slider/pepper.jpg',
//     'https://fotomix.by/image/catalog/photo/shop-photo/fotomix-store-1.jpg',
//     'https://cdn.pixabay.com/photo/2020/06/11/01/40/landscape-5284829_960_720.jpg',
//
// ];
//
//
// let prevSlide = document.querySelector('.offer__slider-prev'),
//     nextSlide = document.querySelector('.offer__slider-next img'),
//     currentNumImg = document.querySelector('#current'),
//     totalNumImg = document.querySelector('#total'),
//     imgCurrent = document.querySelector('.offer__slide');
// totalNumImg.innerHTML = '0' + sliderImg.length;
// currentNumImg.innerHTML = 4;
// console.dir(imgCurrent)
// console.log(currentNumImg.innerHTML)
// // imgCurrent.children[0].src = sliderImg[1];
//
// prevSlide.addEventListener('click', prevSlider);
// nextSlide.addEventListener('click', nextSlider);
// imgCurrent.children[0].addEventListener('click', nextSlider);
//
// function prevSlider() {
//     // sliderImg.forEach(img => {
//     //     // console.log(img);
//     // })
//     imgCurrent.children[0].src = sliderImg[+currentNumImg.textContent - 2];
//     +currentNumImg.textContent--;
//     if (currentNumImg.textContent < 1) {
//         currentNumImg.textContent = sliderImg.length;
//         imgCurrent.children[0].src = sliderImg[sliderImg.length -1];
//     }
// }
//
// function nextSlider() {
//     imgCurrent.children[0].src = sliderImg[+currentNumImg.textContent];
//     +currentNumImg.textContent++;
//     // console.log(+currentNumImg.textContent);
//     if (currentNumImg.textContent > sliderImg.length) {
//         currentNumImg.textContent = 1;
//         imgCurrent.children[0].src = sliderImg[0];
//     }
// }


// let slideIndex = 1;

// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`
// } else {
//     total.textContent = slides.length;
// }

// showSlides(slideIndex);
//
// function showSlides(n) {
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//
//     slides.forEach(item => {
//         item.style.display = 'none';
//     })
//     slides[slideIndex - 1].style.display = 'block';
//
//     if (slides.length < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }
//
// }
//
// function plusSlides(n) {
//     showSlides(slideIndex += n)
// }
//
// prev.addEventListener('click', () => {
//     plusSlides(-1);
// });
//
// next.addEventListener('click', () => {
//     plusSlides(1);
// })

// function solution(str) {
//     return str.split('').reverse().join('');
// }
//
// console.log(solution('world'));
//
// function order(words) {
//     return words.split(' ').sort((a, b) => {
//         return a.match(/\d/) - b.match(/\d/)
//     }).join(' ');
// }
//
// console.log(order('is2 Thi1s T4est 3a'));
// // let str7 = 'gdgsgdsdgs';
// // console.log(Array.isArray(str7));
//
// const uniqueInOrder = (iterable) => {return [...iterable].filter((a, i) => a !== iterable[i-1])};
//
//
// console.log(uniqueInOrder('AAAABBBBcCCDDYY'));
// console.log(uniqueInOrder(['A','A','A', 'A','X', 'X', 'X', 'X', 'H', 'H', 'H', 'H', 'L']));
//
//
// function uniqueInOrder3(it) {
//     let result = []
//     let last = '';
//
//     for (let i = 0; i < it.length; i++) {
//         if (it[i] !== last) {
//             last = it[i];
//             result.push(last)
//         }
//     }
//
//     return result
// }
//
// console.log(uniqueInOrder3('AAAABBBBcCCDDYY'));


// function countAnimals(animals,count){
//     return count.map(animal => (animals.match(new RegExp(animal, "g")) || []).length);
// }
//
// const countAnimals2 = (animals,count) => count.map(x => animals.split(x).length - 1);
//
// function countAnimals3 (animals, count) {
//     return  count.split(',').map(x => (animals.match(new RegExp(x, "g")) || []).length);
// }

// console.log(countAnimals("dog,cat", ["dog", "cat"]) /*, [1,1]*/);
// console.log(countAnimals("dog,cat", ["dog", "cat", "pig"])/* , [1,1,0]*/);
// console.log(countAnimals("dog,dog,cat", ["dog", "cat"])/* , [2,1]*/);
// console.log(countAnimals("dog,dog,cat", ["pig", "cow"]) /*, [0,0]*/);

// console.log(countAnimals3("dog, cat", "dog, cat") /*, [1,1]*/);
// console.log(countAnimals3("dog, cat", "dog, cat, pig")/* , [1,1,0]*/);
// console.log(countAnimals3("dog, dog, cat", "dog, cat")/* , [2,1]*/);
// console.log(countAnimals3("dog, dog, cat", "pig, cow") /*, [0,0]*/);

// console.log(countAnimals2("dog,cat", ["dog", "cat"]) /*, [1,1]*/);
// console.log(countAnimals2("dog,cat", ["dog", "cat", "pig"])/* , [1,1,0]*/);
// console.log(countAnimals2("dog,dog,cat", ["dog", "cat"])/* , [2,1]*/);
// console.log(countAnimals2("dog,dog,cat", ["pig", "cow"]) /*, [0,0]*/);

// let str = "dog, cat, rev1"
// let arr = ['dog', 'cat'];
// console.log(arr.map(x => str.split(x).length -1));


// //example for match()
// function count1(str, char) {
//     return (str.match(new RegExp(char, "g")) || []).length
// }
//
// console.log(count1("a, a, a, a, a, b, b", ["a", 'b']))  //output: 5
// console.log(count1("aaaaa", "b"))

// const foo = {
//     name: 'Jack',
//     f: 4
// };
// const fii = JSON.stringify(foo);
//
// const fuck = JSON.parse(fii);
//
// console.log(fii);
// console.log(fuck);


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 300);
// });
//
// promise.then((value) => {
//     console.log(value);
// });

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "one");
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "two");
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "three");
// });
// const p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "four");
// });
// const p5 = new Promise((resolve, reject) => {
//     reject("reject");
// });
//
// Promise.all([p1, p2, p3, p4, p5]).then(value => {
//     console.log(value);
// }, reason => {
//     console.log(reason)
// });

// const arr = [
//     {
//         name: 'Alex',
//         salary: 500
//     },
//     {
//         name: 'Ann',
//         salary: 1500
//     },
//     {
//         name: 'John',
//         salary: 2500
//     },
// ];
//
// const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
// console.log(result)

// console.log('convert me please'.replace(/ /g, '_'))

// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
//
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
//
// function one() {
//     const promises = [a(), b(), c()];
//     Promise.all(promises).then(values => console.log(values))
// }
//
// one();


// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
//
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
//
// async function two() {
//     const promises = [a(), b(), c()];
//     const outpu1 = await Promise.race(promises);
//     return `two is done: ${outpu1}`;
// }
//
// two().then(console.log);

// Это тоже самое, что и .then(data => console.log(data));
// data передается в команду автоматически, и она запускается сама с этими данными


// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
//
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
//
// async function three() {
//     const outpu1 = await a();
//     const outpu2 = await b();
//     const outpu3 = await c();
//     return `three is done: ${outpu1} ${outpu2} ${outpu3}`
// }
//
// three().then(console.log);


// function testArray(a, b) {
//     // Тут нужно написать решение
//     let c =  a.concat(b).split('')
//     c.unshift('Иванов')
//     return c.reverse().join('')
//
// }
//
// console.log(testArray('24142412', 'sdgsdgsdgsdgsd'))

function testDateTime(a, b) {
    // Тут нужно написать решение
    let myDate = new Date()
    myDate.setTime(Date.parse(a));
    let myDate2 = new Date()
    myDate2.setTime(Date.parse(b));
    if (myDate > myDate2) {
        return myDate.getDay()
    }

}

console.log(testDateTime('19 October 1909 10:27', '28 March 1909 00:59'))


