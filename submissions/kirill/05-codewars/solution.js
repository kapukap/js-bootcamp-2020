// SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
    return  getSumOfArrPows(a,2)>getSumOfArrPows(b,3);
}

function getSumOfArrPows(array, pow){
    return array.map(item => Math.pow(item,pow) ).reduce((accum, val)=> accum + val);
}
// END SpeedCode #2 - Array Madness


