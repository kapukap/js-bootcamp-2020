
// min(0,10);
// min(0,-10);

function min(a,b){
    if(a<b){return a;}
    return b;
}

//console.log(min(0,-10));



// isEven(50) -> true
// isEven(75) -> false
// isEven(-1) -> false

function isEven(numb){
    if( numb%2 === 0){
        return Boolean(1)
    }else if(numb<0 && numb ===0){
        numb+=2;
        isEven(numb);
    }
    else{
        return Boolean(0);
    }
}


//console.log(isEven(-1));





// countBs('bye!') -> 1
// countBs('Hello') -> 0
// countBs('Blue bus') -> 2

function countBs(str){
    str = str.toLowerCase();
    let count=0;
    for(let i=0; i<str.length;i++){
        if(str[i]==='b'){count++;}
    }

    return count;
}



//console.log(countBs('Blue bus'));






function countChar(str, char){
    str = str.toLowerCase();
    let count=0;
    for(let i=0; i<str.length;i++){
        if(str[i]===char){count++;}
    }

    return count;
}


//console.log(countChar('Hello','l'));
