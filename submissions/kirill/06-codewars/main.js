// sum of range
function range(a, b, step = 1) {
    let arr = [];
    if (b > a) {
        for (let i = a; i <= b; i += step) {
            arr.push(i);
        }
    }

    if (a > b) {
        for (let i = a; i >= b; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

function sum(arr) {
    return arr.reduce((acc, val) => acc + val);
}

// END sum of range

// reverseArray
function reverseArray(arr) {
    return arr.reverse();
}

function reverseArrayInPlace(arr) {
    return arr.sort(reverse);
}

function reverse(a, b) {
    if (a > b) return -1;
    if (a === b) return 0;
    if (a < b) return 1;
}

console.log(reverseArray(['A', 'B', 'C']));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
// END reverseArray

// obj
function arrayToList(arr) {
    let arrFirstVal = arr.shift();
    if (arrFirstVal === undefined) {
        return null
    }
    return {
        value: arrFirstVal,
        rest: arrayToList(arr)
    }
}

console.log(arrayToList([10, 20]));

function listToArray(obj) {
    let arr = [];
    let json = JSON.stringify(obj);
    json = json.replace(/["'\b]/g, ''); // убираем символы кавычек и пробелы с json-a
    json = json.match(/(value:\d{1,10})/g); // отбираем объекты с ключами values и их значениями
    json.map(item => arr.push(+item.match(/\d{1,10}/g))); // перебираем массив и заносим в новый массив числа
    return arr;
}

console.log(listToArray(arrayToList([10, 20, 30])));

// END obj


// deepEqual
function deepEqual(a, b) {
    if (typeof a === typeof b) {
        if (JSON.stringify(a) === JSON.stringify(b)) {
            return true;
        }
    }
    return false;
}

// End deepEqual


// telegram task 1
function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}

let counter = makeCounter();
console.log(counter(), counter(), counter());
// console.log(makeCounter()(),makeCounter()(),makeCounter()());

// END telegram task 1

// telegram task 2
function randomWalk() {
    let arr = [];
    return function () {
        let number = Math.round(Math.random() * 100);
        if (arr.includes(number)) {
            return randomWalk();
        } else {
            arr = arr.push(number);
            return arr;
        }
    }
}

let random = randomWalk();
console.log(random());
console.log(random());
// END telegram task 2
