// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14,
//     2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write


// let a='hello';
// a='Hi';
// console.log(a);
// document.write(a);
// alert(a);
//
// let b='owu';
// b='Okten';
// console.log(b);
// document.write(b);
// alert(b);
//
// let c='com';
// c='in';
// console.log(c);
// document.write(c);
// alert(c);
//
// let d='ua';
// d='Lviv';
// console.log(d);
// document.write(d);
// alert(d);
//
// let e=1;
// e=2;
// console.log(e);
// document.write(e);
// alert(e);

// let f=10;
// f=21;
// console.log(f);
// document.write(f);
// alert(f);
//
// let G=-999;
// g=-888;
// console.log(g);
// document.write(g);
// alert(g);

// let j=123;
// j=234;
// console.log(j);
// document.write(j);
// alert(j);
//
// let h=3.14;
// h='Pi';
// console.log(h);
// document.write(h);
// alert(h);
//
// let k=2.7;
// k=2.34;
// console.log(k);
// document.write(k);
// alert(k);
//
// 16;
// true;
// false;



// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

//
// let person = {
//     firstName: 'Соляревич',
//     middleName: 'Микола',
//     lastName: 'Марянович'
//
// }

// let firstName = 'Соляревич';
// let middleName = 'Микола';
// let lastName = 'Марянович';
// let person = firstName + middleName + lastName;
// console.log(person);

// let firstName = prompt ('Вітаю твоє імя');
// let middleName = prompt('По батькові');
// let lastName = prompt('Твій вік');

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
// console.log(5<6);
// console.log(5>6);
// console.log(5==6);
// console.log(5===6);
// console.log(10=10);
// console.log(10===10);
// console.log(10<10);
// console.log(10>10);
// console.log(10!=10);
// console.log(123>'123');
// console.log(123=='123');






// ClassWork
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Hello';
// console.log(typeof str);
//
// let num=123;
// console.log(typeof num);
//
// let flag = true;
// console.log(typeof flag);
//
// let txt = 5>3;
// console.log(typeof txt)


// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//         34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11

// let a=28, b=13, c=7;
// console.log(a+b-c);

// let a=2, b=5, c=2;
// console.log(a+b*c)

// let a=88, b=2, c=22;
// console.log(a/b+c);

// let a=33, b=2, c=999;
// console.log(a**b-c);

// let a=15, b=3, c=32;
// console.log(a*b+c);


// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'


//  let a6 = 5 % 3;
//  console.log(a6);
//
//  let a7 = 3 % 5;
//  console.log(a7);
//
//  let a8 = 5 + '3';
//  console.log(a8);
//
//
// let a9 = '5' - 3;
// console.log(a9);
//
// let a10 = 75 + 'кг';
// console.log(a10);

// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.

// let height=23, width=10;
// area = (height*width);
// console.log(area);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let hc=10, dc=4, pi=3.14;
// v = (hc*dc*pi);
// console.log(v);


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n=3, m=4;
// k = (Math.sqrt(n**2 + m**2));
// console.log(k);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let name = ('Як вас звати', 'ggughjkb');
// alert('Ваше імя' + name);
// let age = 36;
// alert('Вам' + age);
// let hobby = 'музика';
// alert('Ваше хобі' + hobby);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Хто';
// let str2 = 'ти';
// let str3 = 'такий';
// concatenation = str1 + ' ' + str2 + ' ' + str3;
// document.write(concatenation);
