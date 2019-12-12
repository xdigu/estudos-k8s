'use strict'


function doFibonacciCalc(n) {
    if (n < 2)
        return 1;
    else
        return doFibonacciCalc(n - 2) + doFibonacciCalc(n - 1);
}

class Fibonacci {
    fibonacci(req, res) {
        let blockres = doFibonacciCalc(parseInt(req.param('n'), 10));
        res.send("done: " + blockres);
    }
}

module.exports = new Fibonacci();
