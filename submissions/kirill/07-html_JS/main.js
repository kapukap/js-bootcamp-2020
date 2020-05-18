let cont_1 = document.querySelector('.content_1');
let cont_2 = document.querySelector('.content_2');
let cont_3 = document.querySelector('.content_3');
let task_1_btn = document.querySelector('#btn-1');
let task_2_btn = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
// Task 2

// Task 3
let number = document.querySelector('#ipt-fibo');

function createElem(txt, container) {
    let div = document.createElement('div');
    div.textContent = txt;
    container.appendChild(div);
}

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
    createElem(rtn, cont_1);
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
    cont_2.appendChild(div);

    button.addEventListener('click', function (){
        span.textContent = +span.textContent+1;
    });
}

function fibonachi(n) {
    return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
}

task_1_btn.addEventListener('click', logIn);
task_2_btn.addEventListener('click', addCounter);
task_2_btn_hidden.addEventListener('click', counting);
btn3.addEventListener('click', function () {
    let numb = fibonachi(number.value);
    createElem(numb, cont_3);
});
