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
