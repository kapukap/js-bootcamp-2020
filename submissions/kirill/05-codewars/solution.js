// SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
    return  getSumOfArrPows(a,2)>getSumOfArrPows(b,3);
}

function getSumOfArrPows(array, pow){
    return array.map(item => Math.pow(item,pow) ).reduce((accum, val)=> accum + val);
}
// END SpeedCode #2 - Array Madness

// Find the Difference in Age between Oldest and Youngest Family Members (Using Spreads)
function differenceInAges(ages){
    let max = Math.max(...ages);
    let min = Math.min(...ages);
    return [min, max, max-min];
}
// END Find the Difference in Age between Oldest and Youngest Family Members

//Find the first non-consecutive number
function firstNonConsecutive (arr) {
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1] - arr[i] !== 1) return arr[i+1];
    }
    return null;
}
// END Find the first non-consecutive number

// Filling an array (part 1)
function arr(N){
    let retArr =[];

    for(let i=0;i<N;i++){
        retArr.push(i);
    }
    return retArr;
}
// END Filling an array (part 1)

// Sum of positive
function positiveSum(arr) {
    let sum =0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>0){
            sum+=arr[i];
        }
    }
    return sum;
}
// END Sum of positive

// Polish alphabet
let letterObj = [
    'ą:a',
    'ć:c',
    'ę:e',
    'ł:l',
    'ń:n',
    'ó:o',
    'ś:s',
    'ź:z',
    'ż:z'
];

function correctPolishLetters(string) {
    string = string.split('');
    for(let i=0; i<string.length;i++){
        for(let j=0; j<letterObj.length;j++){
            if(string[i]===letterObj[j][0]){
                string[i]=letterObj[j][2];
            }
        }
    }
    return string.join('');
}
// END Polish alphabet

// Asterisk it
function asteriscIt(n) {
    if(Array.isArray(n)){
        n = n.toString().replace(/\,/g, '');
    }else{
        n = n.toString().split('');
    }

    return addSymbolIfEven(n).join('');
}


function addSymbolIfEven(args){
    let arr=[];
    for(let i=0;i<args.length;i++){
        if(args[i]%2===0 && args[i+1]%2===0){
            arr.push(args[i],'*');
        }else{
            arr.push(args[i]);
        }
    }
    return arr;
}
// END Asterisk it

// Ironman Triathlon
function iTri(s){
    let triatlon = {
        Swim:2.4,
        Bike: 112,
        Run: 26.2
    };
    let allWay = triatlon.Swim + triatlon.Bike + triatlon.Run;
    if(s>0){
        if(s<triatlon.Swim){return {'Swim' : ((allWay -s).toFixed(2) +' to go!').toString()} ;}
        else if(s<(triatlon.Swim + triatlon.Bike)){ return {'Bike' : ((allWay -s).toFixed(2) +' to go!').toString()} ;}
        else if(allWay - s>10){return {'Run' : ((allWay -s).toFixed(2) +' to go!').toString()};}
        else if((allWay - s)<=10&&(allWay - s)>0){return {'Run' : 'Nearly there!'};}
        else{return 'You\'re done! Stop running!';}
    }

    return 'Starting Line... Good Luck!';
}
// END Ironman Triathlon

// Counting Valleys
function countingValleys(s) {
    let lv=0;
    let counter=0;
    s = s.split('');

    for(let i=0;i<s.length;i++){
        if(s[i] ==='U'){
            lv+=1;
            if((lv-1<0)&&(lv===0)){
                counter++;
            }
        }
        else if(s[i] === 'D'){
            lv-=1;
        }
        else if(s[i] === 'F'){
            lv+=0;
        }
    }
    return counter;
}
// END Counting Valleys

// Find the Middle of the Product
function findMiddle(str){
    let arr = [];
    if(typeof str === 'string'){
        arr = str.match(/(\d)/g);
    }else{return -1;}
    if(arr===null){return -1;}
    else{
        arr = arr.map(item => parseInt(item));
        arr = arr.reduce((acc, val) => acc* val).toString();
        let arrLength = arr.length;
        if(arr.length%2===0){
            if(arr[(arrLength/2)-1] ==='0'){
                return parseInt(arr[arrLength/2])
            }
            return parseInt(arr[(arrLength/2)-1]+arr[arrLength/2]);
        }
        return parseInt(arr[Math.floor(arrLength/2)]);
    }
}
// END Find the Middle of the Product

// Largest 5 digit number in a series
function solution(digits){
    digits = digits.toString();
    let arr=[];
    for(let i=0; i<digits.length; i++){
        arr.push(digits.slice(i,5+i));
    }
    arr = arr.map(item => parseInt(item));
    return Math.max(...arr);
}
// END Largest 5 digit number in a series

// Consecutive Ducks
function consecutiveDucks(num) {
    while(num > 2){
        if(num%2!=0){
            return true;
        }
        num = num/2;
    }
    return false
}
// END Consecutive Ducks
