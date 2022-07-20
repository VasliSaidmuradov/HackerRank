# Drawing Book

# https://www.hackerrank.com/challenges/drawing-book/problem

# 1
def pageCount(n, p):
  # Write your code here
  return min(p//2, n//2 - p//2)