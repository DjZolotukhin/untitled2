// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function numbers(length){
//     let a =[];
//     for (let i = 0; i <length; i++){
//         a.push( Math.round(100*Math.random()));
//     }
//   return a
// }
//
// console.log(numbers(10));


// Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.



// let num = [],
//     min = 1,
//     max = 100;
//
// for(let i = 1; i <= max; i++) num.push(i);
//
// num.splice(num.indexOf(Math.floor(Math.random() * (max + 1 - min) + min)),1);
// num.sort(function() { return Math.random() - 0.5});
//
// console.log(num);






// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     Відсортувати його за допомоги sort




// let num = [];
// for (i=0; i<100; i++) {
//     num.push(Math.round(Math.random() * 100) + 1);
// }
// console.log(num);
// let sort = num.sort(function (a, b)
//     {
//         return a - b;
//     }
// )
// console.log(sort);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, за лишивши тільки парні числа



// let filter = num.filter(function (a) {
//     if (a%2===0){
//         return a;
//     }
// }
// )
// console.log(filter);





// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

// let map = num.map(function (a){
//     return a + '!';
// })
// console.log(map);

//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

//
// function User(id, name, surname, email, phone,) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let newUser = []
//    let user1 = new User(1,"ff","h","j","66677");
// let user2 = new User(4, ' fndjb', 'fdji', 'huis', '546448');
// let user3 = new User(8, 'frsink', 'nfrsifkj', 'hfuirb', '486186');
// let user4 = new User(7, 'HFYUJ', 'hfrbhjk', 'hfrybkj', '4849864');
// let user5 = new User(5, 'hfsukjf', 'hfrnukj','hfruifkhj','56416541');
// let user6 = new User(6,'fbhrnjkfn','hfruifjk','hfrusifhi','468468');
// let user7 = new User(2, 'HFRBNJKN', 'hfurjh','jfnurjk','77946496');
// let user8 = new User(8,'jfriokl','hfrukfhrui','hu4irhiuek','9455645');
// let user9 = new User(3, 'fbrlkj','jhfrui','kinj','654565656');
// let user10 = new User(10,'hfrbhj', 'jdhui','jfeuik','9648415');
//
// newUser.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(newUser);


// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter)


// let newUser1 = newUser.filter(function (a) {
//     if (a.id%2===0){
//         return a;
//     }
//
// }  )
// console.log(newUser1);
//
//
// та Відсортувати його по id. по зростанню (sort)


// let sort = newUser.sort(function  (current, next) {
// return current.id-next.id;
// }  );
//
//
// console.log(sort);


// =================================================================================================

// ClassWork


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class  User { constructor (id, name, surname , email, phone, Order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = Order;
}
}
let newUser = []
   let user1 = new User(1,"ff","h","j","66677", 'apple,orange');
let user2 = new User(4, ' fndjb', 'fdji', 'huis', '546448','Order');
let user3 = new User(8, 'frsink', 'nfrsifkj', 'hfuirb', '486186', 'Order');
let user4 = new User(7, 'HFYUJ', 'hfrbhjk', 'hfrybkj', '4849864','Order');
let user5 = new User(5, 'hfsukjf', 'hfrnukj','hfruifkhj','56416541','Order');
let user6 = new User(6,'fbhrnjkfn','hfruifjk','hfrusifhi','468468','Order');
let user7 = new User(2, 'HFRBNJKN', 'hfurjh','jfnurjk','77946496', 'Order');
let user8 = new User(8,'jfriokl','hfrukfhrui','hu4irhiuek','9455645', 'Order');
let user9 = new User(3, 'fbrlkj','jhfrui','kinj','654565656', 'Order');
let user10 = new User(10,'hfrbhj', 'jdhui','jfeuik','9648415', 'Order');

newUser.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(newUser);

// let newOrder = []
//  let Order = new newUser['Apple', 'Orange'];
//  newOrder.push(Order1);
// console.log(Order[newOrder]);

function User(name, surname, city, proffession, married, children) {
    this.name = name;
    this.surname = surname;
    this.city = city;
    this.proffession = proffession;

    function status() {
        this.married = married;
        this.children = children;
    }

    this.status = new status();
}
