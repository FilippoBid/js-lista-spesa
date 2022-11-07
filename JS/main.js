const ulEl = document.getElementById('mylist');
const shoppingItems = ["lemon", "gin", "vodka", "tonica", "ghiccio", "bicchieri"];
const liEl = document.createElement("li");
let i = 0;
console.log(i);


ulEl.append(liEl);


while (i < shoppingItems.length) {
    liEl.innerHTML += `${shoppingItems[i]}  `;
    console.log(shoppingItems[i]);
    i++;
}; 









