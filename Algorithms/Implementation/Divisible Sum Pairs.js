// Divisible Sum Pairs

// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

// #1
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0
  for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
      let sumOfPairs = ar[i] + ar[j]
      if (sumOfPairs % k === 0) {
        count++
      }
    }
  }
  return count
}