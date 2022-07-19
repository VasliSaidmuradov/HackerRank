# Subarray Division

def birthday(s, d, m):
  # Write your code here
  count = 0
  days = 0
  for i in range(m):
    days += s[i]

  if days == d:
    count += 1

  l, r = 0, m

  while r < len(s):
    days = days - s[l] + s[r]
    if days == d:
      count += 1
    l += 1
    r += 1

  return count