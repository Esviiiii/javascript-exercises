const repeatString = function(string, num) {
    if (num < 0) {
        module.log("Error")
    } else  {
        for(let i = 0; i === num; i++){
            module.log(string)
        }
    }
};

console.log(repeatString("hey", 3))

// Do not edit below this line
module.exports = repeatString;
