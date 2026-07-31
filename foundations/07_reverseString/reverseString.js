const reverseString = function(string) {

    let result = "";

    for(let i = 0; i <= string.length; i++){
        result += string.charAt(string.length - i);
    }

    return result;
};

reverseString("");

// Do not edit below this line
module.exports = reverseString;
