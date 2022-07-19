# Divisible Sum Pairs

# https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

# 1
def divisibleSumPairs(n, k, ar):
  # Write your code here
  count = 0

  for i in range(n-1):
    for j in range(i+1, n):
      val = ar[i] + ar[j]

      if val % k == 0:
        count += 1

  return count