// Drawing Book

// https://www.hackerrank.com/challenges/drawing-book/problem

// #1
function pageCount(n, p) {
  // Write your code here
  return Math.min(Math.floor(p/2), Math.floor(n/2) - Math.floor(p/2))
}