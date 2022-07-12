// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

function caesarCipher(s, k) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  k = k % alphabet.length
  let res = ''
  const cipher = alphabet.slice(k) + alphabet.slice(0, k)

  for (let char of s) {
    if (isAlphabet(char)) {
      if (isUpper(char)) {
        const temp = char.toLowerCase()
        const idx = alphabet.indexOf(temp)
        res += cipher[idx].toUpperCase()
      } else {
        const idx = alphabet.indexOf(char)
        res += cipher[idx]
      }
    } else {
      res += char
    }
  }

  return res
}