// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
//     або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

// let pList = document.getElementById("content");
// console.log(pList);

// -- отримує текст з блоку з id "rules"

// let dList = document.getElementById("rules");
// console.log(dList);

// -- замініть текст параграфа з id 'content' на будь-який інший

// let pList = document.getElementById("content");
// pList.innerText = 'замініть текст параграфа з id \'content\' на будь-який інший';


// -- замініть текст параграфа з id 'rules' на будь-який інший

// let dList = document.getElementById('rules');
// dList.innerText = 'замініть текст параграфа з id \'rules\' на будь-який інший';

// -- змініть кожному елементу колір фону на червоний
// let pList = document.getElementById("content");
// pList.style.background = 'red';
//
// let dList = document.getElementById('rules');
// dList.style.background = 'red';
//
// let ulList = document.getElementsByTagName('ul')
// for (const ulListElement of ulList){
//     ulListElement.style.background = 'red';
// }
// -- змініть кожному елементу колір тексту на синій

// let pList = document.getElementById("content");
// pList.style.color = 'blue';
//
// let dList = document.getElementById('rules');
// dList.style.color = 'blue';
//
// let ulList = document.getElementsByTagName('ul')
// for (const ulListElement of ulList){
//     ulListElement.style.color = 'blue';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log


// let dList = document.getElementById('rules');
// console.log(dList.classList);


// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст
// елементу, інша довільний ьексь

// let ulList = document.getElementsByTagName('ul')
// for (const ulListElement of ulList){
//     ulListElement.style.color = 'blue';
// }

// let ul = document.getElementsByClassName('fc_rules');
// console.log(ul);
// for (const pUl of ul){
//     pUl.classList.toggle('fc_rules');
//     console.log(pUl);
// }
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let ul = document.getElementsByClassName('fc_rules');
// console.log(ul);
// for (const pUl of ul){
//     pUl.style.color = 'red';
// }



// ======================================================

// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let pMain = document.getElementById('main_header');
// pMain.innerText = 'june-2021';
// pMain.style.color = '#999';


// b) робить шириниу елементу ul 400px

// let pUl = document.getElementsByTagName('ul')
// for (let Ul of pUl){
//     Ul.style.background='red';
//     Ul.style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let li = document.getElementsByClassName('linkList')
// for (let pLi of li){
//     pLi.style.background = 'green';
//     pLi.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let elem = document.getElementsByClassName('linkList listElement2');
// for (let lin of elem){
//     console.log(lin);
// }


// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
