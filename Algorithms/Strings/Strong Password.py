# https://www.hackerrank.com/challenges/strong-password/problem

# 1
def minimumNumber(n, password):
  # Return the minimum number of characters to make the password strong
  digit = 0
  upper = 0
  lower = 0
  special = 0
  req = 0

  for ch in password:
    if ch.isdigit():
      digit = 1
    elif ch.isupper():
      upper = 1
    elif ch.islower():
      lower = 1
    else:
      special = 1

  req = 4 - (digit + upper + lower + special)
  
  return 6 - n if n + req < 6 else req