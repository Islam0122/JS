const categories = [
    { name: 'Агробазар',
        image: 'https://media.tezsat.kg/media/category/images/%D0%B0%D0%B3%D1%80%D0%BE.png',
        link: 'https://www.tezsat.kg/category/agrobazar' },
    { name: 'Сельхозтехника',
        image: 'https://media.tezsat.kg/media/category/images/selhoz.png',
        link: 'https://www.tezsat.kg/category/selhoztehnika' },
    { name: 'Строительные материалы',
        image: 'https://media.tezsat.kg/media/category/images/stroymater.png',
        link: 'https://www.tezsat.kg/category/stroitelnye-materialy' },
    { name: 'Недвижимость',
        image: 'https://media.tezsat.kg/media/category/images/nedvizhimost.png',
        link: 'https://www.tezsat.kg/category/nedvizhimost' },
    { name: 'Электроника',
        image: 'https://media.tezsat.kg/media/category/images/electronic.png',
        link: 'https://www.tezsat.kg/category/elektronika' }
];

const div = document.querySelector('.category-btns');

for (const category of categories) {
    div.innerHTML +=
        `<a href="${category.link}" class="category-btn" style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${category.image}'); margin-bottom: 15px;">
            ${category.name}
        </a>`
    ;
}

let buttons = div.querySelectorAll('button');

for (let i = 0; i < categories.length; i++) {
    buttons[i].onclick = function () {
        for (const btn of buttons) {
            btn.className = '';
        }
    };
}