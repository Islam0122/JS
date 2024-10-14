// input() -> name
let name = prompt("Введите ваше имя:");

// input() -> day and month
let day = parseInt(prompt("Введите ваш день рождения (ДД):"));
let month = parseInt(prompt("Введите ваш месяц рождения (ММ):"));

let zodiac_sign; // -> underfined

// Определяем знак зодиака
if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
{zodiac_sign = "Водолей";}
else if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
{zodiac_sign = "Рыбы";}
else if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
{zodiac_sign = "Овен";}
else if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
{zodiac_sign = "Телец";}
else if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
{zodiac_sign = "Близнецы";}
else if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
{zodiac_sign = "Рак";}
else if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
{zodiac_sign = "Лев";}
else if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
{zodiac_sign = "Дева";}
else if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
{zodiac_sign = "Весы";}
else if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
{zodiac_sign = "Скорпион";}
else if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
{zodiac_sign = "Стрелец";}
else {
    zodiac_sign = "Козерог";
}

alert(`${name}, ваш знак зодиака: ${zodiac_sign}`);