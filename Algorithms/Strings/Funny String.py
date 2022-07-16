# Funny String

# 1
def funnyString(s):
  # Write your code here
  arr = []
  for ch in s:
    arr.append(ord(ch))

  l, r = 0, len(arr) - 1

  while l < len(arr) - 1:
    diffL = abs(arr[l] - arr[l + 1])
    diffR = abs(arr[r] - arr[r - 1])
    if diffL != diffR:
      return 'Not Funny'
    l += 1
    r -= 1

  return 'Funny'