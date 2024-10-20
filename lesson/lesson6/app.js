// JS test APP
// DOM

const timer = document.querySelector('h3#timer');
const bilet_number = document.querySelector('h3#bilet-nomer');
const quiz_img = document.querySelector('img#quiz-img');
const quiz_text = document.querySelector('h5#quiz-text');
const options = document.querySelector('ul#options');
const bilrt_btns = document.querySelector('div#bilrt-btns');

const questions = [
    {
        imgUrl: 'https://nuancesprog.ru/wp-content/uploads/2024/01/0-dfnqH2_cE9DxzMm4.png',
        quizText: 'JS te kancha tipy dannyh bar?',
        options: ['8', '6', '7'],
        correctOption: '8'
    },
    {
        imgUrl: 'https://pbs.twimg.com/media/EUXzAv1UwAQrKGA.jpg',
        quizText: 'Ответ задачи 1',
        options: ['1', '11', 'NaN'],
        correctOption: '11'
    },
    {
        imgUrl: 'https://nuancesprog.ru/wp-content/uploads/2024/01/0-dfnqH2_cE9DxzMm4.png',
        quizText: 'JS te kancha tipy dannyh bar?',
        options: ['8', '6', '7'],
        correctOption: '8'
    },
    {
        imgUrl: 'https://pbs.twimg.com/media/EUXzAv1UwAQrKGA.jpg',
        quizText: 'Ответ задачи 1',
        options: ['11', '2', 'NaN'],
        correctOption: '11'
    },
    {
        imgUrl: 'https://nuancesprog.ru/wp-content/uploads/2024/01/0-dfnqH2_cE9DxzMm4.png',
        quizText: 'JS te kancha tipy dannyh bar?',
        options: ['8', '6', '7'],
        correctOption: '8'
    },
    {
        imgUrl: 'https://pbs.twimg.com/media/EUXzAv1UwAQrKGA.jpg',
        quizText: 'Ответ задачи 1',
        options: ['11', '2', 'NaN'],
        correctOption: '11'
    },
];
let index = 0;

function showQuiz(i) {
    quiz_img.src = questions[i].imgUrl;
    quiz_text.innerHTML = questions[i].quizText;
    options.innerHTML = questions[i].options.map(opt => {
        return `<li class="list-group-item" onclick="checkAnswer('${opt}', ${i})">${opt}</li>`;
    }).join('');
    showBilr();
}


function showBilr() {
    bilrt_btns.innerHTML = questions.map((_, i) => `
        <button class="btn btn-outline-info px-3" onclick="goToQuestion(${i})">${i + 1}</button>
    `).join('');
}

function goToQuestion(i) {
    index = i;
    showQuiz(index);
}

function checkAnswer(selectedOption,i) {
    const correctOption = questions[i].correctOption;
    if (selectedOption === correctOption) {
        alert("Правильный ответ!");
    } else {
        alert(`Неправильный ответ. Правильный ответ: ${correctOption}`);
    }
}
showQuiz(index);
