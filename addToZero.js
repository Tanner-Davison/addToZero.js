// Starting array
let array = [28, 43,-12, 30, 4, 0, 12]

// Write your solution below:

function addTwoZero (addInArray){
    const seenNumbers = {};
    for(let num of addInArray){
        if(-num in seenNumbers){
        return true;
        
    }else {
        seenNumbers[num]= true;
    }
}
console.log(false)
}

//ORRRRR YOU CAN WRITE IT WITH A NESTED FOR LOOP

console.log(addTwoZero(array))

let answer = false;

for(i=0; i<array.length;i++){

    for(j=i+1; j<array.length;j++){
        if(array[j]+array[i]===0){
            answer =true;
        }
    }
}
console.log(answer)
