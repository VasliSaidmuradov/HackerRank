# Pangrams
# https://www.hackerrank.com/challenges/pangrams/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

# 1
def pangrams(s):
  # Write your code here
  a = [0] * 26

  for ch in s:
    if ch == ' ':
      continue
    lower = ch.lower()
    idx = ord(lower) - 97
    a[idx] += 1
  for i in range(len(a)):
    if a[i] == 0:
      return 'not pangram'

  return 'pangram'