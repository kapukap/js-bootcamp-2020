function min(a,b){
    if(a<b){return a;}
    return b;
}


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

function isEvenNew(numb){
    if (numb === 0){
        return true;
    }
    else if(numb === 1){
        return false;
    }
    else if(numb > 0){
        return isEvenNew(numb -2 );
    }
    return isEvenNew(numb + 2 );
}

function countBs(str){
    str = str.toLowerCase();
    let count=0;
    for(let i=0; i<str.length;i++){
        if(str[i]==='b'){count++;}
    }

    return count;
}



function countChar(str, char){
    str = str.toLowerCase();
    let count=0;
    for(let i=0; i<str.length;i++){
        if(str[i]===char){count++;}
    }

    return count;
}