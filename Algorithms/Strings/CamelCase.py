# https://www.hackerrank.com/challenges/camelcase/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign

# 1
def camelcase(s):
  ans = 1
  for ch in s:
    if ch.upper() == ch:
      ans += 1
  return ans

# 2
def camelcase(s):
  ans = 1
  for ch in s:
    if ord(ch) >= 65 and ord(ch) <= 90:
      ans += 1
  return ans