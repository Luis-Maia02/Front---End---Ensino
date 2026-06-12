const lista = document.querySelector("#lista");
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");
const item4 = document.createElement("li");


item1.textContent = "JavaScript";
item2.textContent = "C#";
item3.textContent = "HTML";
item4.textContent = "CSS";


lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);
lista.appendChild(item4);

