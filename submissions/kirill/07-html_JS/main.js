// Task 1
let signInContainer = document.querySelector('#signInContainer');
let singInBtn = document.querySelector('#singInBtn');
// Task 2
let countersContainer = document.querySelector('#countersContainer');
let addCounterBtn = document.querySelector('#addCounterBtn');
// Task 3
let fibonacciContainer = document.querySelector('#fibonacciContainer');
let number = document.querySelector('#fibonacciInput');
let fibonacciBtn = document.querySelector('#fibonacciBtn');

function logIn() {
    let rtn;
    let data = {
        name: 'Admin',
        pass: 'Я Главный'
    };
    let nameAnswer = prompt('Who\'s there?');

    if (nameAnswer === data.name) {
        let passAnswer = prompt('Пароль?');

        if (passAnswer === data.pass) {
            rtn = 'Здравствуйте';
        } else if (passAnswer === null || passAnswer === '') {
            rtn = 'Отменено';
        } else {
            rtn = 'Не верный пароль';
        }
    } else if (nameAnswer === null || nameAnswer === '') {
        rtn = 'Отменено';
    } else {
        rtn = 'I don\'t know you';
    }


    let div = document.createElement('div');
    div.textContent = rtn;
    signInContainer.appendChild(div);

    return rtn;
}

function addCounter() {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let button = document.createElement('button');

    span.textContent = '0';
    button.textContent = 'Add One';

    div.appendChild(span);
    div.appendChild(button);
    countersContainer.appendChild(div);

    button.addEventListener('click', function (){
        span.textContent = +span.textContent+1;
    });
}

function fibonacchi(n) {
    return n <= 1 ? n : fibonacchi(n - 1) + fibonacchi(n - 2);
}

singInBtn.addEventListener('click', logIn);
addCounterBtn.addEventListener('click', addCounter);

fibonacciBtn.addEventListener('click', function () {
    let numb = fibonacchi(number.value);
    let div = document.createElement('div');

    div.textContent = numb;
    fibonacciContainer.appendChild(div);
});
