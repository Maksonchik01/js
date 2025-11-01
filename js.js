let name = "Maksym";
let result = 55 + 55 + name;
console.log(result);
let result2 = "apple" > "w";
console.log(result2);
let result3 = 55 === "55";
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
let user = prompt ('Тип підписки Basic, Standard, Premium');
let age = prompt ('Ваш вік')
if (user === "Basic" ) {
    if (age >= 60) {
        alert ('Вартість 80грн')
    }else {
 alert ('Вартість 100грн')
    }
}else if (user === "Standard"){
if( age >= 60) {
    alert ('200грн')
} else {
    alert ('250грн')
}
} else if ( user === "Premium") {
    if (age >= 60) {
        alert ('400')
    }else {
        alert('500')
    }
}