const ulEl = document.getElementById('mylist');
const shoppingitems = ["lemon", "gin", "vodka", "tonica", "ghiccio", "bicchieri"];
const liEl = document.createElement("li");
let currentitemcount = 0;

while ( currentitemcount < shoppingitems.lenght ) {
    liEl.innerHTML = `${shoppingitems[currentitemcount]}`;
    console.log("ciao");
    currentitemcount++;
    ulEl.append(liEl);
};


