# Bill Division

# https://www.hackerrank.com/challenges/bon-appetit/problem

def bonAppetit(bill, k, b):
  # Write your code here
  sum = 0
  for i in range(len(bill)):
    if i != k:
      sum += bill[i]

  a = sum // 2

  print('Bon Appetit' if b == a else b - a)