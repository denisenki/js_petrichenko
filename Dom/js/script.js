//Получение элемена из html
let menu = document.querySelector(".menu"),
    lii = document.querySelectorAll("li");

//проверка на пойманный атрибут
console.log(menu);
console.log(lii);

//добраться до стилей
menu.style.backgroundColor = "blue";

//создание нового объекта в dom
let li = document.createElement('li');

//присваивание имени класса
li.className = "menu-item";

//добавление текста
li.textContent = "Пятый элемент";

console.log(li);

//добавление элемента в dom
menu.appendChild(li);

//удаление элемента из dom у родителя
//menu.removeChild(lii[2]);

//ищем фон
let backImg = document.querySelector("body");
console.log(backImg);

//меняем стиль
backImg.style.background = "url(img/apple_true.jpg) center no-repeat";

//удаляем блок
let adv = document.querySelector(".adv");
adv.remove();

function loading() {
    let answer = prompt("Тест");

    let n1 = document.querySelector(".prompt");

    n1.textContent = answer;
    console.log(answer);
};

loading();