// Bill Division

// https://www.hackerrank.com/challenges/bon-appetit/problem

// #1
function bonAppetit(bill, k, b) {
  // Write your code here
  let sum = 0

  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      sum += bill[i]
    }
  }

  let a = sum / 2

  console.log(a === b ? 'Bon Appetit' : b - a)
}