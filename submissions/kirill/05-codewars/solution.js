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


