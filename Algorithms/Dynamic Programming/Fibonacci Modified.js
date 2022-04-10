// Fibonacci Modified

// https://www.hackerrank.com/challenges/fibonacci-modified/problem

// #1
function fibonacciModified(t1 = 0, t2 = 1, n) {
  // Write your code here
  let b1 = BigInt(t1), b2 = BigInt(t2)
  let i = 2
  while (i < n) {
    [b1, b2] = [b2, b1 + b2 * b2]
    i++
  }
  return b2
}

// #2
function fibonacciModified(t1 = 0, t2 = 1, n) {
  // Write your code here
  let fib = [BigInt(t1), BigInt(t2)]
  for (let i = 2; i < n; i++) {
    const temp = fib[0] + fib[1] ** 2n
    fib[0] = fib[1]
    fib[1] = temp
  }
  return fib[1]
}