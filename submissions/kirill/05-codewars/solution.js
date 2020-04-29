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
