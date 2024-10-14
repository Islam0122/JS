 let age = prompt("Введите ваш возраст:");


age = Number(age);


if (age < 18) {
    alert("Вы несовершеннолетний.");
} else if (age >= 18 && age <= 60) {
    alert("Вы взрослый.");
} else {
    alert("Вы пенсионер.");
}


///////////////////////////////////////////////////////


let time = prompt("Введите время (0-24):");

time = Number(time);

if (time >= 6 && time < 12) {
    alert("Доброе утро");
} else if (time >= 12 && time < 18) {
    alert("Добрый день");
} else if (time >= 18 && time < 22) {
    alert("Добрый вечер");
} else {
    alert("Доброй ночи");
}