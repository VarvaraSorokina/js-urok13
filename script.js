'use strict';
// function calculateArea(r){
//     let area;
//     if(r<=0){
//         return 0;
//     }else{
//         area = Math.PI * r *r;
//         return area;
//     }
// }
// let radius = 2.2;
// let theArea = calculateArea(radius);
// console.log('The area is: ' + theArea);

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.
// let txt = 'abc!def!';
// console.log(txt.replace(/!/g, '@'));


// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).
// let txt = 'aaa bbb ccc';
// console.log(txt.substr(4,3));
// console.log(txt.substring(4,7));
// console.log(txt.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
// let txt = 'js';
// console.log(txt.toUpperCase());

// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.
//let txt = 'я люблю JS!';
//console.log(txt.length);




// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные:years, myDog, guests
// Функции:dogYears, makeTea, secret
// Встроенные функции:console.log()
// Аргументы:(dogname, age), (cups, tea), (guests, 'Earl Grey')
// Параметры:' is ' ' years old', 'Rex', 'Breawing ' ' cups of', 'The secret of life is 28'

// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.

let txt = 'JS';
console.log(txt.toLowerCase());

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).

let txt2 = 'я люблю javascript!';
console.log(txt2.substr(2,5));
console.log(txt2.substring(2,7));
console.log(txt2.slice(2,7));
console.log(txt2.substr(8,10));
console.log(txt2.substring(8,18));
console.log(txt2.slice(8,18));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.

let txt3 = 'я люблю JS!';
console.log(txt3.substring(2,7))

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.

let txt4 = 'Людям даётся одна пара на всю жизнь';
let n = 35;
if(txt4.length > n){
    console.log(txt4.slice(0,22)+'...');
} else{
    console.log(txt4);
}

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.

let txt5 = 'Я-люблю-JS!';
console.log(txt5.replace(/-/g, '!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.

let txt6 = 'я люблю JS';
console.log(txt6.split(' '));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.

let txt7 = 'привет мир';
console.log(txt7.split(""));