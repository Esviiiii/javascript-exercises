const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let text = "";
    for(let i = 1; i <= string.length; i++){
        text += cleanString.charAt(cleanString.length - i)
    };


    return cleanString === text;
};

palindromes("racecar")
palindromes("abba")
palindromes("rac3e3car")
palindromes("A car, a man, a maraca.")
palindromes("ZZZZ car, a man, a maracaz.")
palindromes("racecar!")


// Do not edit below this line
module.exports = palindromes;
