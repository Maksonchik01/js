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
