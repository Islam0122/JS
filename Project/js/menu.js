const categories = ['All category', 'Dinner', 'Lunch', 'Dessert', 'Drink'];

// DOM
const div = document.querySelector('.category-btns');
let index = 0;

for (const category of categories) {
    div.innerHTML += `
    <button class="${categories[index] === category ? 'active' : ''}">
      ${category}
    </button>
  `;
}

let buttons = div.querySelectorAll('button');

for (let i = 0; i < categories.length; i++) {
    buttons[i].onclick = function () {
        for (const btn of buttons) {
            btn.className = '';
        }
    };
}
