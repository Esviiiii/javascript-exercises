const fibonacci = function(index) {
    const fib =[0,1];

    if(index < 0) {
        return "OOPS"
    } else {
        for (let i = 2; i <= index; i++){
            const nextNum = fib[fib.length - 1] + fib[fib.length - 2]
            fib.push(nextNum);
        }
    }

    return fib[index]
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
fibonacci("0");
fibonacci("1");
fibonacci("2");
fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;
