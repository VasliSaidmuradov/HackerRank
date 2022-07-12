# Caesar Cipher

# 1
def caesarCipher(s, k):
  # Write your code here
  k = k % 26
  res = ''

  for i in range(len(s)):
    if s[i].isupper():
      code = ord(s[i]) + k
      if code > ord('Z'):
        correct_code = ord('A') + (code - ord('Z') - 1)
        res += chr(correct_code)
      else:
        res += chr(code)
    elif s[i].islower():
      code = ord(s[i]) + k
      if code > ord('z'):
        correct_code = ord('a') + (code - ord('z')- 1)
        res += chr(correct_code)
      else:
        res += chr(code)
    else:
      res += s[i]
  return res