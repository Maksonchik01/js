// let name = "Maksym";
// let result = 55 + 55 + name;
// console.log(result);
// let result2 = "apple" > "w";
// console.log(result2);
// let result3 = 55 === "55";
// let age = prompt("Ваш Вік ?");
// if (age >= 18) {
//     alert ("Вітаємо")
// } else {
//     alert ("Недоступно")
// };
// let user = prompt("Введіть число");
// if (user > 0) {
//     alert ("Положительное")
// } else if (user < 0) {
//     alert ("Отрицательное")
// } else {
//     alert( "0")
// }
// let user = +prompt("Введіть число");
// if (user % 2 === 0) {
//     alert("Чётное")
// } else {
//     alert ("Нечётное")
// }
// let user = prompt("Введіть число");
// if (user < 0) {
//     alert ("Холодно")
// } else if (user < 26) {
//     alert ("Тепло")
// } else {
//     alert ("Жарко")
// }
// let user = +prompt("Введіть сумму");
// if(user >= 1000) {
//     alert (`${user - (user * 0.1)}`)
// } else if (user >= 5000) {
//     alert (`${user - (user * 0.2)}`)
// } else  {
//     alert('без скидки')
// }
// let login = prompt('username');
// let password = prompt('password');
// if(login === 'admin' && password === '1234'){
//     alert ('Доступ надано')
// } else {
//     alert ('Недоступно')
// }
// let user = prompt ('Введіть балли');
// if(user < 50) {
//     alert ('Неудовлетворительно')
// } else if (user > 50 && user <= 74) {
//     alert ('Удовлетворительно')
// } else if (user >= 75 && user <= 89) {
//     alert ('Хорошо')
// }else if (user >= 90 && user <= 100){
//     alert ('Отлично')
// } else {
//     alert ('Неправильне число')
// }
// let client = prompt ('Сумма');
// if (client < 500) {
//     alert ('скидка 0%')
// }else if ( client >= 500 && client <= 1000) {
// alert (`${client - (client * 0.05)}`)
// } else if (client > 1000 && client <= 5000){
//     alert ( `${client - (client * 0.1)}`)
// } else {
//     alert (`${client - (client * 0.15)}`)
// }
// let user = prompt ('Тип підписки Basic, Standard, Premium');
// let age = prompt ('Ваш вік')
// if (user === "Basic" ) {
//     if (age >= 60) {
//         alert ('Вартість 80грн')
//     }else {
//  alert ('Вартість 100грн')
//     }
// }else if (user === "Standard"){
// if( age >= 60) {
//     alert ('200грн')
// } else {
//     alert ('250грн')
// }
// } else if ( user === "Premium") {
//     if (age >= 60) {
//         alert ('400')
//     }else {
//         alert('500')
//     }
// }
// let str = "Дрібні їжачки їли їжу";
// let result = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "і") {
//         result += 1;
//     }
// }
// alert (result)
// let str = "Привіт. Як справи. Все добре.";
// let result = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "." ) {
//         result += 1
//     }
// }
// alert (result)

// let str = "Це рядок із пробілами";
// let result = "";
// for (let i = 0; i < str.length; i++) {

// if (str[i] !== " " ) {
//     result += str[i]
// }
// }
// alert (result)
// let str = "Сьогодні чудовий сонячний день";
// let result = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === " " ){
//         result += 1
//     }
// }
// alert (result)
// let str = "Це просто приклад рядка";
// let result = "";
// for (let i = 0; i < str.length; i++) {
// if (str[i] === " ") {
//     result += "-"
// }else {
//     result += str[i]
// }
// }
// alert(result)
// let str = "Привіт! Як справи! Все супер!";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//    if (str[i] === "!" ) {
//     result += " "
//    } else {
//     result += str[i]
//    }

// }
// alert (result)
//  const arr = [4, 7, 1, 9, 3];
//  let result = 0;
//  for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
//  }
//  alert (result)
// const arr1 = [4, 7, 1, 9, 3,2, 10];
// let result = 0;
// for (let i = 0; i < arr1.length; i++) {
// if (arr1[i] % 2 === 0) {
//     result += arr1[i]
// }

// }
// alert (result)
// const arr = [1, 2, 3, 4, 5, 6];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
// result.push(arr[i] * 2)

// }
// alert (result)
// const fruits = ["kiwi", "pineapple", "mango", "grape"];
// let result = [];
// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] !== "kiwi")  {
//         result.push(fruits[i])
//     }
// }
// const arr = [5, 10, 14, 21, 18, 3, 20];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10 && arr[i] <= 20) {
//     result.push(arr[i])
//     }
// }
// const mixed = ["js", "frontend",  "api",  "react",  "dom"];
// let result = 0;
// for (let i = 0; i < mixed.length; i++) {
//     if (mixed[i].length >= 4) {
//         result += 1
//     }

// }

// const mixed = [12, "sunshine", "car", false, "mountain", "sky"];
// let result = [];
// for (let i = 0; i < mixed.length; i++) {
//     if (typeof mixed[i] === "string") {
//         result.push(mixed[i])
//     }

// }
// alert (result)
// const mixed = [10, "5", "abc", 30, null, undefined, 20, "7"];
// let result = 0;
// for (let i = 0; i < mixed.length; i++) {
//    if (typeof mixed[i] === "number" ) {
//     result += mixed[i]
//    }

// }
// alert(result)

// const mixed = ["apple", 12, "banana", "kiwi", null, "plum"];
// let result = 0;
// for (let i = 0; i < mixed.length; i++) {
// if (typeof mixed[i] === "string") {
//     result += mixed[i].length
// }

// }
// alert (result)
// const mix = [2, "3", 5, null, true, 4, "hi"];
// let result = 1;
// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === "number") {
//         result *= mix[i]
//     }
// }
// alert (result)
// const data = ["sun", "ocean", 45, "sky", true, "mountain"];
// let result = 0;
// for (let i = 0; i < data.length; i++) {
//    if (typeof data[i] === "string" && data[i].length > 3) {
//     result += 1
//    }

// }
// alert(result)
// const mix = [null, 5, "a", null, true, 10];
// for (let i = 0; i < mix.length; i++) {
//   if ( mix[i] === null) {
//     mix[i] = 0
//   }

// }
// console.log( mix);

// const mix = [5, undefined, "hi", null, 8, undefined, true];
// let result = [];
// for (let i = 0; i < mix.length; i++) {
//     if (mix[i] !== undefined) {
//         result.push(mix[i])
//     }

// }
// alert (result)
// const data = ["add", 5, "x", 10, "add", 3, 2, "add", 7];
// let result = 0;
// for (let i = 0; i < data.length; i++) {
// if (typeof data[i] === "number" && data[i] > result) {
//     result = data[i]
// }

// }
// alert (result)
// const arr = ["hi", "sun", 5, null, "ok", "sky"];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string' && arr[i].length > 2) {
//         result.push(arr[i].toUpperCase())
//     }

// }
// alert (result)

// ДЗ

// const words = [
//   "яблуко",
//   "банан",
//   "яблуко",
//   "ківі",
//   "банан",
//   "банан",
//   10,
//   14,
//   21,
//   18,
//   3,
//   20,
// ];
// let result = [];

// for (let i = 0; i < words.length; i++)
//   if (typeof words[i] === "string") {
//     result.push((words[i] += "!"));
//   } else if (typeof words[i] === "number") {
//     result.push(words[i] * words[i]);
//   }
// alert(result);

// const animals = ["cat", "dog", "elephant", "tiger"];
// let result = [];
// for (let i = 0; i < animals.length; i++) {
// result.push(animals[i][0])
// }
// alert(result)

// const mixed = [
//   10,
//   "Привіт",
//   true,
//   { name: " Ігор ", age: 20 },
//   [1, 2, 3],
//   false,
//   45,
//   "JS",
//   { name: "Оля", age: 25 },
//   [10, 20],
//   null,
//   "React",
// ];
// let result = "";
// for (let i = 0; i < mixed.length; i++) {
// if (typeof mixed[i] === 'string') {
//     result += mixed[i]
// }

// }
// const cities = ["Paris", "Berlin", "London", "Boston"];
// let result = [];
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i][0] === 'B') {
//         result.push(cities[i])
//     }

// }
// alert(result)

// const nums = [10, 5, 15, 8, 3];
// let result = 0;
// for (let i = 0; i < nums.length; i++) {
// if (nums[i] === 15) {
//     result += i
// }

// }
// alert(result)

// const numbers = [4, 7, 9, 10, 12, undefined, "hi", null, 8, undefined, true];
// let result = [];
// let resultNum = []
// for (let i = 0; i < numbers.length; i++) {
//     if (typeof numbers[i] === 'number' && numbers[i] % 2 == 0) {
//         result.push(numbers[i])
//     } else if(typeof numbers[i] === 'number' && numbers[i] % 2 !== 0) {
//         resultNum.push(numbers[i])
//     }

// }
// console.log(result, resultNum);

// const arr = [4, -3, 7, -1, 0, 8];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     result.push(arr[i] = 0)
//   } else {
//     result.push(arr[i])
//   }

// }
// alert(result)

// const arr = [5, 10, 15, 20, 25];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
// if (i % 2 !== 0) {
//     result += arr[i]
// }

// }
// alert (result)
// const arr = [10, 3, 8, 5, 4];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     result.push(arr[i] / 2)
//   } else {
//     result.push(arr[i])
//   }

// }
// alert(result)

// const arr = [1, 2, 3, 4, 5, 6, -5, 10, -2]
// const arrMap = arr.map(el => el * 5);
// // console.log(arrMap);
// // const arrFilter = arr.filter(el => el > 3)
// // console.log(arrFilter);
// // const arrSome = arr.some(el => el > 3)
// // console.log(arrSome);
// // const arrEvery = arr.every(el => el > 3)
// // console.log(arrEvery);
// // const arrReduce = arr.reduce((acc, el)=> acc + el, "")
// // console.log(arrReduce);
// // const findArr = arr.find(el => el % 2 === 0)
// // console.log(findArr);
// // const sliceArr = arr.slice(0, 3)
// // console.log(sliceArr);
// // const reverseArr = arr.reverse()
// // const spliceArr = arr.splice(0, 3)
// // console.log(arr);
// const sortArr = arr.sort((a, b) => a - b)
// console.log(arr);

// const numbers = [10, -5, 7, -2, 0, 3];
// const numbersFilter = numbers.filter(el => el > 0)
// console.log(numbersFilter);

// ДЗ

// Отримай новий масив, у якому кожен елемент помножений на 5.

// const arr = [2, 4, 6, 8];
// const arrMap = arr.map(el => el * 5);
// console.log(arrMap);

// // Перевір, чи є хоча б одне парне число. Поверни булеве значення (true або false).

// const numbers = [1, 3, 7, 10, 5];
// const numbersSome = numbers.some(el => el % 2 === 0);
// console.log(numbersSome);

// // Створи новий масив, де тільки парні числа помножені на 2, а непарні залишилися без змін.

// const arr2 = [3, 8, 1, 10, 6, 5];
// const arr2Map = arr2.map(el => el % 2 === 0 ?  el * 2 : el)
// console.log(arr2Map);

// //Залиш у масиві лише ті слова, які довші за 4 символи, і перетвори їх на великі літери.

// // const words = ["js", "frontend", "dom", "api", "react"];
// // let result = []
// // for (let i = 0; i < words.length; i++) {
// //  if (words[i].length > 4 ) {
// //     result.push(words[i].toUpperCase([i]))
// //  }

// //  }
// // console.log(result);

// //Залиш у масиві лише ті слова, які довші за 4 символи, і перетвори їх на великі літери.

// const words = ["js", "frontend", "dom", "api", "react"];
// const wordsFilter = words.filter(el => el.length > 4).map(el => el.toUpperCase())
// console.log(wordsFilter);

// //Видали всі нулі з масиву та виведи кількість елементів, що залишилися.

// const arr3 = [0, 5, 3, 0, 7, 9, 0];
// const arr3Filter =  arr3.filter(el => el > 0)
// console.log(arr3Filter);

// const numbers = [3, 7, -2, 8, -5];
// const numbersFilter = numbers.filter(el => el > 0).reduce((acc, el)=> acc + el, 0)
// console.log(numbersFilter);

// const words = ["сонце", "ліс", "дощ", "вода"];
// const wordsMap = words.map(el => el.length)
// console.log(wordsMap);

// const numbers = [0, 3, 0, 4, 5, 0];
// const numbersFilter = numbers.filter(el => el === 0 ).length

// const numbers = [10, 20, 30, 40];
// const numbersReduce = numbers.reduce((acc, el)=> acc + el, 0) / numbers.length
// console.log(numbersReduce);

// const arr = ["hi", "sun", 5, null, "ok", "sky"];
// const arrFilter = arr.filter(el => typeof el === 'string').map(el => el.length > 2 ? el.toUpperCase() : el)
// console.log(arrFilter);

// const numbers = [10, 2, 33, 4, 21, 8];
// const numbersSort = numbers.sort((a, b)=> a - b ).slice(0, 3)
// console.log(numbersSort);

// const nums = [10, 5, 15, 8, 3];
// const numsFindIndex = nums.findIndex(el => el === 15)
// console.log(numsFindIndex);

//ДЗ

//Є масив булевих значень. Перетвори його в масив чисел.

// const flags = [true, false, true, true, false];
// const flagsMap = flags.map(Number);
// console.log(flagsMap);

//Є змішаний масив. Залиш у ньому тільки числа.

// const arr = ["кіт", "собака", 42, "вода", true, "море"];
// const arrFilter = arr.filter((el) => typeof el === "number");
// console.log(arrFilter);

//Порахуй кількість чисел, більших за 10

// const numbers = [2, 15, 8, 22, 11, 5];
// const numbersFilter = numbers
//   .filter(el => el >= 10).length
// console.log(numbersFilter);

//Порахуй суму тільки позитивних чисел

// const numbers = [-5, 10, -2, 8, 3];
// const numbersFilter = numbers.filter(el => el > 0).reduce((acc, el)=> acc + el, 0)
// console.log(numbersFilter);

//Є масив чисел. Знайди середнє арифметичне тільки непарних.

// const numbers = [3, 8, 5, 12, 7, 10];
// const numbersReduce = numbers.filter(el => el % 2 !== 0).reduce((acc, el)=> acc + el, 0) / numbers.length
// console.log(numbersReduce);

// Є масив чисел. Розверни його й отримай перші три елементи.

// const numbers = [10, 20, 30, 40, 50];
// const numbersReverse = numbers.reverse().slice(0, 3)
// console.log(numbersReverse);

// const arr = [10, "5", "15", 20, "30"];
// const arrFilter = arr.filter(el => typeof el === 'string').map(el => Number(el)).reduce((acc, el)=> acc + el, 0)
// console.log(arrFilter);

// const numbers = [2, 3, 5, 6, 7];
// const numbersFilter = numbers.filter(el => el % 2 !== 0).reduce((acc, el)=> acc * el, 1)
// console.log(numbersFilter);

// const numbers = [10, 20, 30, 40, 50];
// const numbersReduce = numbers.reduce((acc, el)=> acc + el, 0) / numbers.length
// const numbersFilter = numbers.filter(el => el > numbersReduce).length
// console.log(numbersFilter);

//Є масив слів. Створи новий масив, що містить лише перші літери кожного слова.

// const words = ["кіт", "дерево", "сонце", "вода"];
// const wordsMap = words.map(el => el[0])
// console.log(wordsMap);

// const arr = [4, -3, 9, -1, 0, 7];
// const arrMap = arr.map(el => el < 0 ? 0 : el)
// console.log(arrMap);

// const arr = [10, 20, 30, 40, 50];
// const arrReduce = arr.reduce((acc, el)=> acc + el, 0) / arr.length
// const arrFilter = arr.filter(el => el > arrReduce).reduce((acc, el)=> acc + el, 0)
// console.log(arrFilter);

// const words = ["вода", "трава", "море"];
// const wordsEvery = words.every(el => el.includes("а"))
// console.log(wordsEvery);

// const numbers = [2, 3, 5, 6, 7];
// const numbersFilter = numbers.filter(el => el % 2 !== 0).reduce((acc, el)=> acc * el, 1)
// console.log(numbersFilter);

// const arr = [10, "5", "15", 20, "30"];
// const arrFilter = arr.filter(el => typeof el === "string").map(el => Number(el)).reduce((acc, el)=> acc + el, 0)
// console.log(arrFilter);

// const arr = [4, -3, 9, -1, 0, 7];
// const arrSort = arr.sort((a, b)=> a - b).slice(0, 3)
// console.log(arrSort);

// const arr = ["кіт", "собака", 42, "вода", true, "море"]
// const arrFilter = arr.filter(el => typeof el === "string").reduce((acc, el)=> acc + el.length, 0)
// console.log(arrFilter);

// const obj = {
// name: "Maksym",
// age: 19,
// country: "Ukraine"
// }
// obj.age = 21
// console.log(obj.name);

// const prices = { apple: 20, cherry: 40, mango: 50 };
// let sum = 0
// for (const key in prices) {
//  sum += prices[key]
// }
// console.log(sum);

// const user = { name: "Ivan", age: 25, city: "Lviv" };
// let sum = 0;
// for (const key in user) {
// sum += 1
// }
// console.log(sum);

// const user = { name: "Ivan", age: 25, city: "Lviv" };
// let userObj = {};
// for (const key in user) {
//     if (key.length > 3) {
//         userObj[key] = user[key]
//     }

// }
// console.log(userObj);

// const user = { login: "root", password: "1234", role: "admin" };
// let userObj = {};
// for (const key in user) {
//     if (key !== "password") {
//         userObj[key] = user[key]
//     }
// }
// console.log(userObj);

// const data = { a: 1, b: "hi", c: 5, d: true, e: 9 };
// let dataObj = {};
// for (const key in data) {
// if (typeof data[key] === "number" || typeof data[key] === "boolean") {
//     dataObj[key] = data[key]
// }

// }
// console.log(dataObj);

// const obj = { city: "Kyiv", street: "Khreshchatyk", code: "UA" };
// let objNew = {};
// for (const key in obj) {
//     objNew[key] = obj[key].length

// }
// console.log(objNew);

// const flags = { a: true, b: false, c: true, d: true, e: false };
// let flagsSum = 0;
// for (const key in flags) {
//     if (flags[key] === true) {
//         flagsSum += 1
//     }
// }
// console.log(flagsSum);

// const product = {
//   title: "Телефон",
//   price: 12000,
//   color: "black",
//   count: 4,
// };
// const productNew = {};
// for (const key in product) {
// if (typeof product[key] === "string") {
//     productNew[key] = product[key]
// }
// }
// console.log(productNew);

// const roles = {
//   user1: "editor",
//   user2: "viewer",
//   user3: "admin",
// };
// let rolesAdmin = false;
// for (const key in roles) {
//     if (roles[key] === "admin") {
//         rolesAdmin = true
//     }

// }
// console.log(rolesAdmin);

// const items = {
//   a: 3,
//   b: 12,
//   c: 99,
//   d: 4,
// };
// const itemsNew = [];
// for (const key in items) {
//     if (items[key] > 10) {
//         itemsNew.push(key)
//     }

// }
// console.log(itemsNew);

// const nums = {
//   n1: 3,
//   n2: 10,
//   n3: 7,
//   n4: 20,
// };
// const numsKey = [];
// for (const key in nums) {
// if (nums[key] % 2 === 0) {
//     numsKey.push(key)
// }

// }
// console.log(numsKey);

// const stock = {
//   apples: 10,
//   bananas: 6,
//   oranges: 14,
// };
// const stockNew = {};
// for (const key in stock) {
// stockNew[key] = stock[key] * 5
// }
// console.log(stockNew);

// const mix = {
//   id: 5,
//   name: "Igor",
//   age: 30,
//   active: true,
// };
// const mixNum = {};
// for (const key in mix) {
// if (typeof mix[key] === "number") {
//     mixNum[key] = "NUM"
// }else {
//     mixNum[key] = mix[key]
// }

// }
// console.log(mixNum);

// const original = {
//   a: "red",
//   b: "green",
//   c: "blue",
// };
// const originalNew = {};
// for (const key in original) {

//     originalNew[original[key]] = key

// }

// console.log(originalNew);

// const data = {
//   name: "Alex",
//   city: "Kharkiv",
//   hobby: "football",
// };
// const dataNew = [];
// for (const key in data) {
// if (data[key].length > 5) {
//     dataNew.push(key)
// }

// }
// console.log(dataNew);

// const scores = {
//   math: 80,
//   physics: 92,
//   english: 75,
// };
// let scoreNew = 0;
// for (const key in scores) {
//    if (scores[key] > scoreNew) {
//     scoreNew = scores[key]
//    }

// }
// console.log(scoreNew);

// const obj = {
//   name: "Max",
//   car: "BMW",
//   color: "black",
//   phone: "iPhone",
// };
// let objNew = 0;
// for (const key in obj) {
// if (key.includes("a")) {
//     objNew += 1
// }
// }
// console.log(objNew);

// const words = {
//   a: "hello",
//   b: "car",
//   c: "laptop",
// };
// const wordsNew = {};
// for (const key in words) {
//   wordsNew[words[key].length] = words[key]
// }
// console.log(wordsNew);

// const obj = {
//   name: "Nazar",
//   city: "",
//   phone: "",
//   age: 18,
// };
// const objNew = {};
// for (const key in obj) {
//  if (obj[key] !== "") {
//     objNew[key] = obj[key]
//  }

// }
// console.log(objNew);

// const cart = {
//   apple: 15,
//   banana: 20,
//   milk: 35,
// };
// let cartTotal = 0;
// for (const key in cart) {
// cartTotal += cart[key]

// }
// console.log(cartTotal);

// const person = {
//   name: "Ivan",
//   city: "Lviv",
//   age: 28,
// }
// const personNew = {};
// for (const key in person) {
// personNew[key.toUpperCase()] = person[key]
// }
// console.log(personNew);

// const data = {
//   a: "red",
//   b: "green",
//   c: "black",
//   d: 120,
// };
// const dataNew = {};
// for (const key in data) {
//   if (typeof data[key] === "string") {
//     dataNew[data[key]] = key
//   }else {
//     dataNew[key] = data[key]
//   }

// }
// console.log(dataNew);

// const settings = {
//   darkMode: true,
//   ads: false,
//   volume: 80,
//   username: "user123",
// };
// const settingsNew = {};
// for (const key in settings) {
//    if (typeof settings[key] === "boolean") {
//     settingsNew[key] = "BOOL"
//    } else{
//     settingsNew[key] = settings[key]
//    }
// }
// console.log(settingsNew);

// const scores = {
//   math: 80,
//   physics: 92,
//   english: 75,
// username: "user123",
//  ads: false,
// };
// let scoresNew = 0;
// for (const key in scores) {

//     if (typeof scores[key] === "number" && scores[key] > scoresNew) {
//         scoresNew = scores[key]
//     }
// }
// console.log(scoresNew);

// const obj = { id: 1, name: 'Молоко', price: 2.50 };
// const objVal = Object.values(obj)
// console.log(objVal);
// const obj = { id: 1, name: 'Молоко', price: 2.50 };
// const objKey = Object.keys(obj)
// console.log(objKey);
// const obj = { id: 1, name: 'Молоко', price: 2.50 };
// const objEntries = Object.entries(obj)
// console.log(objEntries);

// const nums = { a: 4, b: 7, c: 10, d: 3 };
// const numsVal = Object.values(nums).reduce((acc, el)=> acc + el, 0) ;
// console.log(numsVal);

// const ratings = {
//   phone: 4.3,
//   laptop: 3.2,
//   tablet: 4.8,
//   tv: 2.9
// };
// const ratingsVal = Object.values(ratings).filter(el => el > 4)
// console.log(ratingsVal);

// const data = { a: 1, b: null, c: 3 };
// const dataVal = Object.values(data).some(el => el === null)
// console.log(dataVal);
// const nums = { a: 5, b: 20, c: 13, d: 8 };
// const numsVal = Object.values(nums).filter(el => el > 10).reduce((acc, el)=> acc + el, 0)
// console.log(numsVal);

// const obj = {
//   age: 20,
//   amount: 30,
//   name: "Ira",
//   active: true
// };
// const objKey = Object.keys(obj).filter(el => el[0] === "a" )
// console.log(objKey);

// const obj = {
//   age: 20,
//   amount: 30,
//   name: "Ira",
//   active: true
// };
// const objKey = Object.keys(obj).map(el => el.length)
// console.log(objKey);

// const data = {
//   name: "yaroslav",
//   city: "kyiv",
//   age: 26
// };
// const dataVal = Object.values(data).filter(el => typeof el === "string").map(el => el.toUpperCase())
// console.log(dataVal);

// const obj = {
//   title: "Book",
//   year: 2020,
//   author: "Tom",
//   available: true,
// };
// const objVal = Object.values(obj).filter(el => typeof el === "string").length
// console.log(objVal);
// const obj = {
//   title: "Book",
//   year: 2020,
//   author: "Tom",
//   available: true,
//   hp: 100,
//   mp: 50,
//   stamina: 30,
// };
// const objVal = Object.values(obj).filter(el => typeof el === "number")
// const objSum = objVal.reduce((acc, el)=> acc + el, 0 ) / objVal.length;
// console.log(objSum);


// function printHello(user) {
//     console.log(`Hello ${user}`);
// }

// const printHello = (user) => {
//     console.log(`Hello ${user}`);
// }
// printHello("Maks")
// printHello("John")
// printHello("Evgen")

// function sum (a, b) {
//    return a + b
// }
// console.log(sum(2, 2));
// const arr = [4, 5, 9, 5, 0, 7];
// function countFives(arr) {
// return arr.filter(el => el === 5).length
// }
// console.log(countFives(arr));
// const arr = [4, 5, 9, 5, 0, 7];

// function squareAll(arr) {
//     return arr.map(el => el * el)
// }
// console.log(squareAll(arr));

// const arr = [4, 5, 9, 5, 0, 7];

//  function getEven(arr) {
//     return arr.filter(el => el % 2 === 0)
//  }
//  console.log(getEven(arr));
 
// const arr = [4, 5, 9, 5, 0, 7];
// function getAverage(arr) {
//     return arr.reduce((acc, el)=> acc + el, 0) / arr.length
// }
// console.log(getAverage(arr));

// const arr = ["кіт", "собака", 42, "вода", true, "море"];
// function getUpperCase(arr){
//     return arr.filter(el => typeof el === "string").map(el => el.toUpperCase())
// }
// console.log(getUpperCase(arr));

// const words = ["кіт", "дерево", "сонце", "вода"];
// function getFirstLetter(words) {
//     return words.map(el => el[0])
// }
// console.log(getFirstLetter(words));


// const products = [
//   { id: 1, title: "Phone", price: 120 },
//   { id: 2, title: "Book", price: 15 },
//   { id: 3, title: "Tablet", price: 80 },
// ];

// function productPrice (products) {
//     return products.filter(el => el.price > 50)
// }
// console.log(productPrice(products));

// const cart = [
//   { title: "Milk", price: 20, qty: 2 },
//   { title: "Bread", price: 15, qty: 1 },
//   { title: "Juice", price: 25, qty: 3 },
// ];
// function cartSum (cart) {
//     return cart.reduce((acc, el)=> acc + el.price * el.qty, 0)
// }
// console.log(cartSum(cart));

// const items = [
//   { title: "TV", price: 300, discount: false },
//   { title: "Laptop", price: 900, discount: true },
// ];
// function itemsDiscount (items) {
//     return items.some(el => el.discount === true)
// }
// console.log(itemsDiscount(items));

// const people = [
//   { name: "Anna", age: 20 },
//   { name: "Petro", age: 40 },
//   { name: "Maks", age: 30 },
// ];
// function peopleAge(people) {
//     return  people.reduce((acc, el)=> acc + el.age, 0) / people.length
// }
// console.log(peopleAge(people));

// const clients = [
//   { id: 1, name: "Ivan", active: true },
//   { id: 2, name: "Sofia", active: false },
//   { id: 3, name: "Oleh", active: true },
// ];
// function  clientsActive (clients) {
//     return clients.filter(el => el.active === true )
// }
// console.log(clientsActive (clients));

// const workers = [
//   {name: "Anna", salary: 1200},
//   {name: "Ivan", salary: 900},
//   {name: "Mark", salary: 1500}
// ];
// function totalSalary(workers) {
//     return workers.reduce((acc, el)=> acc + el.salary, 0)
// }
// console.log(totalSalary(workers));

// const users = [
//   { name: "Ira", balance: 1250.57 },
//   { name: "Maks", balance: 2200.12 },
//   { name: "Petro", balance: 1600.4 }
// ];
// function userBalance(users) {
//     const balance = users.map(el => el.balance)
//     const maxBalance = Math.max(...balance)
//     return users.filter(el => el.balance ===  maxBalance)
// }
// console.log(userBalance(users));

// const books = [
//   { title: "Harry Potter", pages: 500 },
//   { title: "Short Story", pages: 90 },
//   { title: "JS Guide", pages: 350 }
// ];

// function bookTitle(books) {
//     return books.filter(el => el.pages > 300).map(el => el.title.toUpperCase())
// }
// console.log(bookTitle(books));

// const items = [
//   { price: 50 },
//   { price: 200 },
//   { price: 300 }
// ];
// function itemsPrice(items) {
//     return items.filter(el => el.price > 100).reduce((acc, el)=> acc + el.price, 0) / 2
// }
// console.log(itemsPrice(items));

// const products = [
//   { title: "Laptop", category: "electronics" },
//   { title: "Shirt", category: "fashion" },
//   { title: "TV", category: "electronics" }
// ];

// function productsCategory(products) {
//     return products.filter(el => el.category === "electronics").map(el => el.title).sort()
// }
// console.log(productsCategory(products));

// const obj = {
//   title: "Book",
//   year: 2020,
//   author: "Том",
//   available: true,
// hp: 100, mp: 50, stamina: 30
// };
//  function objNum(obj) {
//     let objTotal = 0;
//     let countNum = 0;
//     for (const key in obj) {
// if (typeof obj[key] === "number") {
//     objTotal += obj[key]
//     countNum += 1
// }
//     }
//     return objTotal / countNum
//  }
//  console.log(objNum(obj));

//  const movies = [
//   { title: "Inception", rating: 8.7, year: 2010 },
//   { title: "Avatar", rating: 7.8, year: 2009 },
//   { title: "Interstellar", rating: 8.6, year: 2014 },
//   { title: "Matrix", rating: 8.8, year: 1999 }
// ];
// function moviesRating(movies) {
//     const moviesRating = movies.filter(el => el.rating > 8)
//     const moviesSort = moviesRating.sort((a, b)=> a.rating - b.rating)
//     const moviesMiddleRating = moviesSort.reduce((acc, el)=> acc + el.rating, 0) / moviesSort.length
//     return moviesMiddleRating
// }
// console.log(moviesRating(movies));

// const products = [
//   { name: "Phone", price: 800, category: "tech" },
//   { name: "TV", price: 1500, category: "tech" },
//   { name: "Table", price: 400, category: "furniture" },
//   { name: "Chair", price: 300, category: "furniture" }
// ];
// function productsPrice(products) {
//     const productsTech = products.filter(el => el.category === "tech").reduce((acc, el)=> acc + el.price, 0);
//     const productsFurniture = products.filter(el => el.category === "furniture").reduce((acc, el)=> acc + el.price, 0)
//     return [productsTech, productsFurniture]
// }
// console.log( productsPrice(products) );

// const library = [
//   { title: "CSS", price: 200 },
//   { title: "Node.js", price: 350 },
//   { title: "React", price: 400 }
// ];
// function libraryPrice(library) {
//   const libraryPrices = library.map(el => el.price);
//   const libraryMath = Math.max(...libraryPrices)
//   const libraryName = library.filter(el => el.price === libraryMath )
//   return libraryName.map(el => el.title)
// }
// console.log(libraryPrice(library));

// const operations = [
//   { type: "income", amount: 300 },
//   { type: "expense", amount: 100 },
//   { type: "income", amount: 50 },
//   { type: "expense", amount: 40 }
// ];
// function operationName(operations) {
//     const operationsAmount = operations.map(el => el.amount)
//     const operationsMath = Math.min(...operationsAmount)
//     const operationsType = operations.filter(el => el.amount === operationsMath)
//     return operationsType.map(el => el.type)
// }
// console.log(operationName(operations));

// const arr=[
//   {name:"Laptop", price:1000, category:"tech"},
//   {name:"Pen", price:3, category:"other"},
//   {name:"Phone", price:800, category:"tech"},
//   {name:"Napkin", price:1, category:"other"}
// ]
// function arrPrice(arr) {
//     const arrCategory = arr.filter(el => el.category === "tech").reduce((acc, el)=> acc + el.price, 0)
//     return arrCategory

// }
// console.log(arrPrice(arr));
