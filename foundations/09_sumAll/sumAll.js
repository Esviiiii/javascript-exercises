const sumAll = function(a, b) {

    let total = 0;

    
    if((a > 0 && b > 0) && (a < b) && (a % 1 === 0 && b % 1 === 0 )){
        for(let i = a; i <= b; i++){
            total = total + i;
        }
    } else if((a > 0 && b > 0) && (b < a) && (a % 1 === 0 && b % 1 === 0 )){
        for(let i = b; i <= a; i++){
            total = total + i;
        }
    } else {
        return "ERROR"
    }

    return total;
};

sumAll(10, "90");


// Do not edit below this line
module.exports = sumAll;
