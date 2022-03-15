// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

function diagonalDifference(arr) {
  // Write your code here
  let sum1 = 0
  let sum2 = 0

  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    sum1 += arr[i][i]
    sum2 += arr[i][j]
  }

  return Math.abs(sum1 - sum2)
}