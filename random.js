// const input = document.querySelector(".input")
// const tip = document.querySelector(".tip")
// const btnCheck = document.querySelector(".check")
// const btnRestart = document.querySelector(".restart")
// const error = document.querySelector(".error")
// const attemptText = document.querySelector(".attempt")
// let attempt = 0;
// let randomNumber = Math.floor(Math.random() * 10) + 1
// function startGame() {
//     const value = Number(input.value)
//     if (attempt === 3) {
//         tip.textContent = "Ви програли"
//         tip.style.color = "red"
//         return
//     }
//     attempt++
//     attemptText.textContent = attempt
//     if (value > 10 || value < 1) {
//     error.textContent = "Некоректне число введіть число від 1 до 10"
//     return 
//     }
//     if (value === randomNumber) {
//         tip.textContent = "Вітаю ви перемогли"
//         tip.style.color = "green"
//         btnCheck.disabled = true
//     } else if (value > randomNumber) {
//         tip.textContent = "Загадане число менше"
//         tip.style.color = "orange"
//     } else {
//         tip.textContent = "Загадане число більше"
//         tip.style.color = "orange"
//     }
// }
// btnCheck.addEventListener("click", ()=> startGame())

// function restartGame() {
//     input.value = ""
//     tip.textContent = ""
//     attempt = 0
//     attemptText.textContent = attempt
//     randomNumber = Math.floor(Math.random() * 10) + 1
//     btnCheck.disabled = false
// }
// btnRestart.addEventListener("click", ()=> restartGame())


// const products = [
//   {
//     id: 1,
//     name: "Смартфон Samsung Galaxy S23",
//     category: "electronics",
//     price: 32000,
//     rating: 4.7,
//     stock: 12
//   },
//   {
//     id: 2,
//     name: "Ноутбук Apple MacBook Air M2",
//     category: "electronics",
//     price: 48000,
//     rating: 4.9,
//     stock: 7
//   },
//   {
//     id: 3,
//     name: "Игровая мышь Logitech G305",
//     category: "accessories",
//     price: 1900,
//     rating: 4.6,
//     stock: 25
//   },
//   {
//     id: 4,
//     name: "Стул офисный Ergonomic Pro",
//     category: "furniture",
//     price: 4500,
//     rating: 4.3,
//     stock: 9
//   },
//   {
//     id: 5,
//     name: "Кроссовки Nike Air Max",
//     category: "clothing",
//     price: 3200,
//     rating: 4.5,
//     stock: 15
//   },
//   {
//     id: 6,
//     name: "Футболка Puma Sport",
//     category: "clothing",
//     price: 850,
//     rating: 4.1,
//     stock: 40
//   },
//   {
//     id: 7,
//     name: "Телевизор LG OLED55",
//     category: "electronics",
//     price: 54000,
//     rating: 4.8,
//     stock: 4
//   },
//   {
//     id: 8,
//     name: "Кофейный столик Milano",
//     category: "furniture",
//     price: 2800,
//     rating: 4.2,
//     stock: 18
//   },
//   {
//     id: 9,
//     name: "Наушники Sony WH-1000XM5",
//     category: "accessories",
//     price: 17500,
//     rating: 4.9,
//     stock: 6
//   },
//   {
//     id: 10,
//     name: "Рюкзак Herschel Classic",
//     category: "accessories",
//     price: 2100,
//     rating: 4.4,
//     stock: 13
//   }
// ];

// const list = document.querySelector(".product-list");
// // const btn = document.querySelector(".product-btn");
// const btnHigh = document.querySelector(".sort-high");
// const btnLow = document.querySelector(".sort-low");

// function renderList(arr) {
//     list.innerHTML = arr.map((el)=> {
//         return `
//         <li>
//         <h3> ${el.name}</h3>
//         <p>${el.category}</p>
//         <p>${el.price}</p>
//         <p> ${el.stock}</p>
//         </li>
//         `
//     }).join("")
// }
// renderList(products)
// function sortHigh(arr) {
//     const sortProductHigh = arr.sort((a, b)=> a.price - b.price)
//     renderList(sortProductHigh)
// }
// function sortLow(arr) {
//     const sortProductLow = arr.sort((a,b)=> b.price - a.price)
//     renderList(sortProductLow )
// }
// btnHigh.addEventListener("click", ()=> sortHigh(products))
// btnLow.addEventListener("click", ()=> sortLow(products))
// renderList(products)
//  function productFilter(arr) {
//     const stockFilter = arr.filter(el => el.stock > 15)
//     renderList(stockFilter)
//  }
//  btn.addEventListener("click", ()=> productFilter(products))

// const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const textNum = document.querySelector(".number")
// function sumNumber(arr) {
//     const sum = arr.filter(el => el % 2 === 0).reduce((acc, el)=> acc + el, 0)
//     textNum.textContent = sum
// }
// btn.addEventListener("click", ()=> sumNumber(arr))
// const arr = ['React', 'JS', 'HTML']
// const btn = document.querySelector(".btn")
// const list = document.querySelector(".list")
// function renderArr (arr) {
// list.innerHTML = arr.map((el)=> {
//     return `
//     <li>
//     <h3>${el}</h3>
//     </li>
//     `
// }).join("")
// }
// renderArr(arr)

// function reset() {
//     list.innerHTML = ""
// }
// btn.addEventListener("click", ()=> reset())
//  const btn = document.querySelector(".btn")
// const list = document.querySelector(".list")
// const arr = [
//     { id: 1, name: 'Max' },
//     { id: 2, name: 'Olga' },
//     { id: 3, name: 'Taras' },
//     { id: 4, name: 'Sashok' },
// { id: 5, name: 'iVan' },
//   ]
//   function renderList(arr) {
//     list.innerHTML = arr.map((el)=> {
//         return `
//         <li>
//         <p>${el.id}</p>
//         <h3>${el.name}</h3>
//         </li>
//         `
//     }).join("")
//   }
//   renderList(arr)
//   function deleteId(arr) {
//     const removeId = arr.filter(el => el.id % 2 === 0)
//     renderList(removeId)
//   }
//   btn.addEventListener("click", ()=> deleteId(arr))


const btn = document.querySelector(".btn")
const list = document.querySelector(".list")
const products = [
  { id: 1, name: "Чехол", price: 20 },
  { id: 2, name: "Монитор", price: 300 },
  { id: 3, name: "Кресло", price: 250 },
  { id: 4, name: "Наушники", price: 120 },
  { id: 5, name: "Зарядка", price: 300 }
];
function listRender(arr) {
    list.innerHTML = arr.map((el)=> {
        return `
        <li>
        <p> ${el.id}</p>
        <h3>${el.name}</h3>
        <p>${el.price}</p>
        </li>
        `
    }).join("")
}
listRender(products)

function sliceProduct(arr) {
    const productSlice = arr.sort((a, b) => b.price - a.price).slice(0, 3)
    listRender(productSlice)
}
btn.addEventListener("click", ()=> sliceProduct(products))