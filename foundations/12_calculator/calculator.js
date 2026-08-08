const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(arr) {
  return arr.reduce((total, nextValue) => total + nextValue , 0)
};

const multiply = function(arr) {
  return arr.reduce((total, nextValue) => total * nextValue , 1)
};

const power = function(x, y) {
  return x
}

const factorial = function(num) {
  let total = 0;
  
  if(num === 0){
    return 1;
  } else {
    for(let i = num; num > 0; i--){
      total += num * (i - 1);
    }
    return total;
  }
};

add(0, 0)
add(2, 2)
add(2, 6)

subtract(10, 4)
subtract(-10, -4)
subtract(-8, 7)

sum([])
sum([7])
sum([7, 11])
sum([1, 3, 5, 7, 9])

multiply([2, 4])
multiply([2, 4, 6, 8, 10, 12, 14])

factorial(0)
factorial(2)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
