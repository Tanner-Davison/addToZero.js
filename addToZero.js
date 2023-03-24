// Starting array
let array = [28, 43,-12, 30, 4, 0, 12]

// Write your solution below:

function addTwoZero (addInArray){
    const seenNumbers = {};
    for(let num of addInArray){
        if(-num in seenNumbers){
        console.log(true);
        return;
    }else {
        seenNumbers[num]= true;
    }
}
console.log(false)
}

console.log(addTwoZero(array))

