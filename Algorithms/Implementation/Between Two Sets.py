# Between Two Sets
# https://www.hackerrank.com/challenges/between-two-sets/problem

# 1
def getTotalX(a, b):
  start, end = a[len(a) - 1], b[0]
  count = 0

  for i in range(start, end + 1):
    a_pass, b_pass = True, True
    for num in a:
      if i % num != 0:
        a_pass = False
        break
    for num in b:
      if num % i != 0:
        b_pass = False
        break
    if a_pass and b_pass:
      count += 1

  return count