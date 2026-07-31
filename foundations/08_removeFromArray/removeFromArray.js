const removeFromArray = function(arr, itemToRemove) {
    return arr.filter(item => item !== itemToRemove);
};

removeFromArray([1, 2, 3, 4], 2);

// Do not edit below this line
module.exports = removeFromArray;
