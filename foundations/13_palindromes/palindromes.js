const palindromes = function (string) {
    let text = "";

    for(let i = 0; i <= string.length; i++){
        text += string.charAt(string.length - i)
    };

    if (string === text) {
        return true;
    } else {
        return false;
    }
};

palindromes("racecar")

// Do not edit below this line
module.exports = palindromes;
