
const inputs = document.querySelectorAll('input');
const span = document.querySelectorAll('span')[0];
const buttons = document.querySelectorAll('button');

const history = [];
const historyList = document.getElementById('historyList');
const historyButton = document.querySelector('input[value="history"]');
const historyDiv = document.querySelector('.history');

historyDiv.style.display = 'none';

const a = inputs[0];
const b = inputs[1];

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        calculate(btn.innerText);
    });
});

historyButton.addEventListener('click', () => {
    // Toggle history section visibility
    if (historyDiv.style.display === 'none') {
        historyDiv.style.display = 'block'; // Show the history
    } else {
        historyDiv.style.display = 'none'; // Hide the history
    }
});

function calculate(option) {
    let c = 0;
    if (option === "+") c = Number(a.value) + Number(b.value);
    if (option === "-") c = Number(a.value) - Number(b.value);
    if (option === "*") c = Number(a.value) * Number(b.value);
    if (option === "/") c = Number(a.value) / Number(b.value);

    if (option === "Clear All") {
        alert('🚀 Всё очищено, босс!');
        a.value = ''; b.value = ''; span.innerText = '';
        return;
    }
    span.innerText = c.toFixed(2);
    history.push({
        operation: `${a.value} ${option} ${b.value}`,
        result: c.toFixed(2)
    });
    updateHistory();
}

function updateHistory() {
    const latest = history[history.length - 1]; // Берём последнюю операцию из массива history

    historyList.innerHTML += `
        <li>
            <span>${latest.operation} = ${latest.result}</span>
        </li>
    `;
}